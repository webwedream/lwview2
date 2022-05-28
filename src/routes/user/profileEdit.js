import { PrismaC } from "$Model/prisma";

/** @type {import("./profileEdit.js").RequestHandler} */
export async function get(evt) {
  try {
    let sessionId = evt.locals.session.data.uuid;
    if (sessionId) {
      const user = await PrismaC.user.findFirst({
        where: {
          id: sessionId
        }
      });
      return {
        status: 200,
        body: {user: user}
      };
    } else {
      return {
        status: 400,
        body: {message: "Bad request. No message found."}
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