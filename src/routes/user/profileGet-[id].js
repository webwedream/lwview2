import { PrismaC } from "$Model/prisma";
import Val from "validator";
/** @type {import("@sveltejs/kit").RequestHandler} */
export async function get(evt) {
  try {
    const parsedId = Val.isUUID(evt.params.id)? evt.params.id : "na";
    if (parsedId == "na") {
      return {
        status: 400,
        body: {message: "Bad request. id is not vallid."}
      };
    }
    if (evt.locals.session.data.uuid) {
      const user = await PrismaC.user.findFirst({
        where: {id: parsedId}
      });
      return {
        status: 200,
        body: {user: user}
      };
    } else {
      return {
        status: 500,
        body: {message: "Internal server error. No active session."}
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {message: "Internal Server error."}
    };
  }
}