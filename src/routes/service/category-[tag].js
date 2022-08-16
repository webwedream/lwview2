import { getServicesByCategory } from "$Model/ghost.js";
import Val from "validator";

/**  @type {import("./category-[tag].js").RequestHandler} */
export async function GET(evt) {
  try {
    const tag = Val.isAlphanumeric(evt.params.tag)? evt.params.tag : "na";
    const services = await getServicesByCategory(tag);
    if (services.length == 0) {
      console.log("No services were found for category "+tag);
    }
    return {
      status: 200,
      body: {services: services}
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {message: "Internal Server error."}
    };
  }
}