import { PrismaC } from "$Model/prisma.js";
import DOMPurify from "isomorphic-dompurify";

/** @type {import("./profileUpdate.js").RequestHandler} */
export async function post(evt) {
  try {
    /**  @type {import("@prisma/client").User} */
    const rawUser = await evt.request.json();
    const updatedUser = await PrismaC.user.update({
      where: {
        id: evt.locals.session.data.uuid? evt.locals.session.data.uuid : "na",
      },
      data: {
        name: DOMPurify.sanitize(rawUser.name),
        role: DOMPurify.sanitize(rawUser.role),
        isProfileEdited: true
      }
    });
    return {
      status: 200,
      body: {updatedUser: updatedUser}
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {message: "Internal server error."}
    };
  }
}