import { PrismaC } from '$Model/prisma';
import Val from 'validator';
/**  @type {import("@sveltejs/kit").RequestHandler} */
export async function get(evt) {
  try {
    const parsedId = evt.locals.session.data.uuid? evt.locals.session.data.uuid : "na";
    /** @type {string} */
    const decodedName = decodeURIComponent(evt.params.name);
    const myUser = await PrismaC.user.findFirst({
      where: {
        id: parsedId
      }
    });
    const searchUsers = await PrismaC.user.findMany({
      take: 15,
      where: {
        organization: myUser?.organization? myUser.organization : "None",
        OR: [{name: {startsWith: decodedName}}, {email: {startsWith: decodedName}}],
        id: {not: myUser?.id}
      }
    });
    return {
      status: 200,
      body: searchUsers
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: []
    };
  }
}