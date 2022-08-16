import sgmail from "@sendgrid/mail";
import DOMPurify from "isomorphic-dompurify";
import Val from "validator";
sgmail.setApiKey(import.meta.env.VITE_SEND_GRID_API_KEY)
/** @type {import("@sveltejs/kit").RequestHandler} */
export async function POST(evt) {
  try {
    const body = await evt.request.json();
    const parsedEmail = Val.isEmail(body.to)? body.to : "na";
    await sgmail.send({
      to: [parsedEmail, "contactus@lwview.com"],
      from: "noreply@lwview.com",
      subject: "Contact request sent",
      html: "<p>hi</p> <p>Thank you for contacting us. a representative will reach out to you soon and set up a meeting if required. Below is the contents of your request for review by the agent.</p><p>"+DOMPurify.sanitize(body.text)+"</p>"
    });
    return {
      status: 200,
      body: {sendSuccessful: true}
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {sendSuccessful: false}
    };
  }
}