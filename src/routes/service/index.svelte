<script>
import CategoryMenu from "$Components/categoryMenu.svelte";

import Navbar from "$Components/navbar.svelte";
import ServiceDash from "$Components/serviceDash.svelte";
import site, { Site } from "$Model/site";
/** @type {import("@tryghost/content-api").PostsOrPages} */
export let services;
</script>
<Navbar menu={Site.menu} />
<svelte:head>
  <title>Services - { Site.title }</title>
</svelte:head>
<main class="prose lg:prose-xl" >
  <CategoryMenu menu={Site.serviceCategoryMenu} />
<ServiceDash services={services} />
</main>