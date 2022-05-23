<script>
import { Site } from "$Model/site";
import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";
/** @type{import("@tryghost/content-api").PostOrPage[]} */
export let posts;
</script>
<main class="prose lg:prose-xl" >
  <h1>Blog</h1>
  <p>Welcome to the {Site.title}.com blog. Where we discuss technical topics like deployment and containerization, business topics like project management, and off topic things like reflections on our tech careers.</p>
    {#if posts }
    <div class="grid grid-cols-2" >
    {#each posts as post}
    <div class="card" >
      <a class="btn btn-link card-title" href={"/blog/"+post.slug} ><h3>{post.title}</h3></a>
      <div class="card-body" >
        <p>{post.excerpt}</p>
        <a href="/blog/{post.slug}" >Read More</a>
        <img src="{post.feature_image}" alt="{post.feature_image_alt}" />
      </div>
    </div>
    {/each}
  </div>
  {:else}
    <p>No blog posts were found.</p>
  {/if}
</main>