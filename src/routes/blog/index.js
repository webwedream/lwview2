import { getFirstPosts } from "$Model/ghost";

/** @type {import("./index.js").RequestHandler} */
export async function GET() {
  try {
    const posts = await getFirstPosts().catch(err => console.error(err));
    return {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: {posts: posts}
    }
  } catch (error) {
    console.error(error);
    return {
      body: {posts: ["a"]},
      status: 500
    };
  }
}