import { PrismaC } from '$Model/prisma.js';
import isEmail from 'validator/lib/isEmail';
/** @type {import("./getTeam-[email].js").RequestHandler} */
export async function get(evt) {
  const parsedEmail = isEmail(evt.params.email)? evt.params.email : "na";
  try {
    const myUser = await PrismaC.user.findFirst({
      where: {email: parsedEmail}
    });
    if (!myUser && parsedEmail != "na") {
      const newUser = await PrismaC.user.create({
        data: {
          email: parsedEmail
        }
      });
      if (!evt.locals.session.data) {
        evt.locals.session.data = {uuid: newUser.id};
      }
      return {
        status: 200,
        body: {
          teams: []
        }
      };
    } else if (!myUser && parsedEmail == "na") {
      console.error("Badd request email "+evt.params.email+" has invallid format.");
      evt.locals.session.destroy();
      return {
        status: 400,
        message: "Bad request email has bad format."
      };
    } else {
      const myTeams = await PrismaC.team.findMany({
        where: {
          members: {
            some: {email: {equals: parsedEmail}}
          } // end members
        }, // end where
        take: 30
      });
      if (!evt.locals.session.data) {
        evt.locals.session.data = {uuid: myUser.id};
      }
      return {
        status: 200,
        body: {
          teams: myTeams
        }
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {
        message: "Internal server error."
      }
    };
  }
}