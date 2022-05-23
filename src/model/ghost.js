import GhostContentAPI from "@tryghost/content-api";

export const GhostClient = new GhostContentAPI({
  url: "http://209.126.6.227:3000",
  key: import.meta.env.VITE_GHOST_KEY,
  version: "v4.4"
});

export async function getFirstPosts() {
  try {
    const posts = await GhostClient.posts.browse({
      limit: 20,
      filter: "tag:-service",
      include: "tags,authors",
      "order": "published_at desc"
    });
    if (!posts || posts.length == 0) {
      console.log("No posts were found.");
      return [];
    } else {
      return posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

/**
 * 
 * @param {string} slug 
 * @returns 
 */
export async function getSinglePost(slug) {
  try {
    const post = await GhostClient.posts.read({
      slug: slug
    });
    if (post) {
      return post;
    } else {
      throw new Error("No post found with slug "+slug);
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
}

/**
 * 
 * @param {string} slug 
 * @returns 
 */
export async function getSinglePage(slug) {
  try {
    const page = await GhostClient.pages.read({
      slug: slug,
    });
    if (page) {
      return page;
    } else {
      throw new Error("Page not found.");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal server Error "+error);
  }
}

/**
 * 
 * @param {number} limit 
 * @returns 
 */
export async function getAllServices(limit) {
  try {
    const services = await GhostClient.posts.browse({
      filter: "tag:service",
      limit: limit
    });
    return services;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error. "+error);
  }
}

export default {
  GhostClient,
  getFirstPosts,
  getSinglePost,
  getSinglePage,
  getAllServices
};