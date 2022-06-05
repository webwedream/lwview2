import { PrismaC } from "$Model/prisma";
import Val from "validator";

/**  @type {import("@sveltejs/kit").RequestHandler} */
export async function get(evt) {
  try {
    const parsedId = Val.isAlphanumeric(evt.params.id)? evt.params.id : "na";
    const Project = await PrismaC.project.findFirst({
      where: {
        id: {equals: parsedId},
        contributers: {some: {id: evt.locals.session.data.uuid}}
      }
    });
    return {
      status: 200,
      body: {project: Project}
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {message: "Internal server error"}
    };
  }
}