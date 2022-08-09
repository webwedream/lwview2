<script>
import { Site } from "$Model/site";
import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";
/** @type{import("@tryghost/content-api").PostOrPage[]} */
export let posts;
</script>
<main class="format lg:format-lg" >
  <h1>Blog</h1>
  <p>Welcome to the {Site.title}.com blog. Where we discuss technical topics like deployment and containerization, business topics like project management, and off topic things like reflections on our tech careers.</p>
    {#if posts }
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center" >
    {#each posts as post}
    <!-- card defined below. -->
    <div class="max-w-lg mx-auto text-center lg:text-left lg:mx-0" >
      <a class="text-3xl font-bold sm:text-4xl" href={"/blog/"+post.slug} ><h3>{post.title}</h3></a>
      <div class="card-body" >
        <p class="mt-4" >{post.excerpt}</p>
        <a class="inline-flex items-center px-8 py-3 mt-8 border border-indigo-600 rounded hover:bg-transparent hover:text-blue-500 focus:outline-none focus:ring" href="/blog/{post.slug}" >Read More</a>
        <img src="{post.feature_image}" alt="{post.feature_image_alt}" />
      </div>
    </div>
    {/each}
  </div>
  {:else}
    <p>No blog posts were found.</p>
  {/if}
</main>