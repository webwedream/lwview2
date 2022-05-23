<script>
import Blogpostdisplay from "$Components/blogpostdisplay.svelte";
import Navbar from "$Components/navbar.svelte";
import { Site } from "$Model/site";
import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";


  
  /** @type {import("@tryghost/content-api").PostOrPage} */
  export let htmlpage;
  export let errors;
</script>
<svelte:head>
  <title>{htmlpage? htmlpage.title : ""} - {Site.title}</title>
  <meta name="description" content= {htmlpage.meta_description? htmlpage.meta_description : "Manage your projects better with Long Web view. This site will contain project management software and share advice on it and other topics relevent to software development and design."} />
  <meta http-equiv="expires" content="600" />
</svelte:head>
<Navbar menu={Site.menu} />
{#if errors}
  <p>{errors}</p>
{/if}
{#if htmlpage }
  <Blogpostdisplay post={htmlpage} />
{:else}
   <p>Loading <FaSpinner /></p>
{/if}