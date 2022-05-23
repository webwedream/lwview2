import { getSinglePost } from "$Model/ghost.js";

/** @type {import("./[slug].js").RequestHandler} */
export async function get(evt) {
  const parsedSlug = /^[a-zA-Z0-9\-]+$/.test(evt.params.slug)? evt.params.slug : "na";
  try {
    const post = await getSinglePost(parsedSlug);
    return {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: {post: post},
      status: 200
    }
  } catch (error) {
    console.error(error);
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