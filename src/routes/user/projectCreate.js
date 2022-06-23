import { PrismaC } from "$Model/prisma";
import DOMPurify from "isomorphic-dompurify";
import Val from "validator";
/** @type {import("@sveltejs/kit").RequestHandler} */
export async function post(evt) {
  try {
    const uuid = evt.locals.session.data.uuid;
    /** @type {import("@prisma/client").Project} */
    const rawProj = await evt.request.json();
    const newProj = await PrismaC.project.create({
      data: {
        name: DOMPurify.sanitize(rawProj.name),
        description: DOMPurify.sanitize(rawProj.description),
        objectives: rawProj.objectives? DOMPurify.sanitize(rawProj.objectives) : "",
        approver: {connect: {id: evt.locals.session.data.uuid}},
        contributers: {connect: {id: uuid}},
        status: DOMPurify.sanitize(rawProj.status),
        type: DOMPurify.sanitize(rawProj.type),
        startDate: rawProj.startDate,
        estimatedEndDate: rawProj.estimatedEndDate,
        actualEnd: rawProj.actualEnd
      }
    });
    return {
      status: 200,
      body: newProj
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {message: "Internal Server Error", status: 500}
    };
  }
}