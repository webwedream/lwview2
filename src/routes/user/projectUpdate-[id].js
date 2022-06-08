import { PrismaC } from "$Model/prisma";
import DOMPurify from "isomorphic-dompurify";
import Val from "validator";

/**  @type {import("@sveltejs/kit").RequestHandler} */
export async function post(evt) {
  try {
    /** @type {import("@prisma/client").Project} */
    const rawProject = await evt.request.json();
    const updatedProjects = await PrismaC.project.updateMany({
      where: {
        id: Val.isAlphanumeric(rawProject.id)? rawProject.id : "NA",
        contributers: {some: {id: evt.locals.session.data.uuid}}
      },
      data: {
        name: DOMPurify.sanitize(rawProject.name),
        description: DOMPurify.sanitize(rawProject.description),
        status: DOMPurify.sanitize(rawProject.status),
        type: DOMPurify.sanitize(rawProject.type),
        startDate: rawProject.startDate && Val.isDate(rawProject.startDate)? new Date(rawProject.startDate) : null,
        estimatedEndDate: rawProject.estimatedEndDate && Val.isDate(rawProject.estimatedEndDate)? new Date(rawProject.estimatedEndDate) : null,
        actualEnd: rawProject.actualEnd && Val.isDate(rawProject.actualEnd)? rawProject.actualEnd : null,
        objectives: rawProject.objectives? DOMPurify.sanitize(rawProject.objectives) : null
      }
    });
    return {
      status: 200,
      body: {project: updatedProjects.count > 0? rawProject : null}
    };
  } catch (error) {
    console.log(error);
  }
}