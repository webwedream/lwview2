import { PrismaC } from "$Model/prisma.js";
import Validator from "validator";
/** @type {import("./team-[id].js").RequestHandler} */
export async function get(evt) {
  const parsedId = Validator.isAlphanumeric(evt.params.id)? evt.params.id: "na";
  try {
    const team = await PrismaC.team.findFirst({
      where: {
        id: parsedId,
        members: {some: {id: {equals: evt.locals.session.data.uuid}}}
      } // end where
    });
    if (team) {
      return {
        status: 200,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: {team: team}
      };
    } else {
      console.log("not found. team "+parsedId);
      return {
        status: 404,
        body: {status: 404, message: "Not Found."}
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {status: 500, message: "Internal server error."}
    };
  }
}