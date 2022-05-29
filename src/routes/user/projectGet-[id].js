import { PrismaC } from "$Model/prisma";
import Val from "validator";
/**  @type {import("@sveltejs/kit").RequestHandler} */
export async function get(evt) {
  try {
    const parsedId = Val.isAlphanumeric(evt.params.id)? evt.params.id : "na";
    if (parsedId == "na") {
      console.log("Could not parse id as it was alpha numeric. Original id is "+evt.params.id);
    }
    const proj = await PrismaC.project.findFirst({
      where: {
        id: parsedId,
        contributers: {some: {id: evt.locals.session.data.uuid}}
      }
    });
    return {
      status: 200,
      body: {project: proj}
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {message: "Internal Server error."}
    };
  }
}