import { getAllServices } from "$Model/ghost";

/** @type {import("./index.js").RequestHandler} */
export async function get(evt) {
  try {
    const services = await getAllServices(15);
    return {
      status: 200,
      body: {services: services}
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: {message: "Internal server error."}
    }
  }
}