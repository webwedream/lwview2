import { PrismaC } from "$Model/prisma.js";
import DOMPurify from "isomorphic-dompurify";

/**  @type {import("./createTeam.js").RequestHandler} */
export async function post({ request, locals }) {
  try {
      /**  @type {import("@prisma/client").Team} */
  const teamRaw = await request.json();
  const teamNew = await PrismaC.team.create({
    data: {
      name: DOMPurify.sanitize(teamRaw.name),
      description: DOMPurify.sanitize(teamRaw.description),
      role: DOMPurify.sanitize(teamRaw.role),
      members: {connect: {id: locals.session.data.uuid}}
    } // end data
  });
  if (teamNew.id && teamNew.id != "") {
    return {
      status: 200,
      body: teamNew
    };
  } else {
    return {
      status: 400,
      body: {status: 400, message: "Bad request. Data was not valid."}
    };
  }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {status:500, message: "Internal server error."}
    };
  }
}