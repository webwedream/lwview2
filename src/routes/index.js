import { getSinglePage } from "$Model/ghost";
import DOMPurify from "isomorphic-dompurify";

/** @type {import("./index.js").RequestHandler} */
export async function get(evt) {
  try {
    const page = await getSinglePage("home");
    if (page) {
      page.html = DOMPurify.sanitize(page.html?.replaceAll("localhost:2368", "209.126.6.227:3000"));
      return {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: {htmlpage: page},
        status: 200
      };
    } else {
      return {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: {errors: "404 Page not found"},
        status: 400
      }
    }
  } catch (error) {
    console.log(error);
    return {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: {errors: error},
      status: 500
    };
  }
}