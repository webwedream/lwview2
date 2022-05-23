import { PrismaC } from '$Model/prisma';
import DOMPurify from 'isomorphic-dompurify';
import Validator from 'validator';
/**  @type {import("./editTeam-[teamId].js").RequestHandler} */
export async function put(evt) {
  try {
    const parsedId = Validator.isAlphanumeric(evt.params.teamId)? evt.params.teamId : "na";
    /** @type {import('@prisma/client').Team} */
    const rawTeam = await evt.request.json();
    const newTeam = await PrismaC.team.update({
      where: {
        id: parsedId
      }, // end where
      data: {
        name: DOMPurify.sanitize(rawTeam.name),
        role: DOMPurify.sanitize(rawTeam.role),
        description: DOMPurify.sanitize(rawTeam.description)
      }
    });
    return {
      status: 200,
      body: {team: newTeam}
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {message: "Internal server error."}
    };
  }
}