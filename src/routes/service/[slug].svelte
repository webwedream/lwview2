<script>
import Blogpostdisplay from "$Components/blogpostdisplay.svelte";
import Navbar from "$Components/navbar.svelte";
import { Site } from "$Model/site";
import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";


/** @type {import("@tryghost/content-api").PostOrPage} */
export let post;
</script>
<svelte:head>
  <title>{post? post.title : "404 error"} - {Site.title}</title>
</svelte:head>
<Navbar menu={Site.menu} />
{#if post }
  <Blogpostdisplay post={post} />
{:else}
  <p>Loading <FaSpinner /> </p>
{/if}