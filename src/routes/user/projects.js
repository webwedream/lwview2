import { PrismaC } from "$Model/prisma";

/** @type {import("@sveltejs/kit").RequestHandler} */
export async function get(evt) {
  try {
    const session = evt.locals.session.data.uuid? evt.locals.session.data.uuid : "na";
    if (session == "na") {
      console.log("No session was found.");
      return {
        status: 400,
        body: {message: "Bad request error."}
      };
    } else {
      const projects = await PrismaC.project.findMany({
        where: {
          contributers: {some: {id: session}}
        }
      });
      return {
        status: 200,
        body: {projects: projects}
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {message: "Internal Server Error."}
    };
  }
}