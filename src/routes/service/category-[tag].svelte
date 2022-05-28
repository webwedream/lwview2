<script>
import CategoryMenu from "$Components/categoryMenu.svelte";
import Navbar from "$Components/navbar.svelte";

import ServiceDash from "$Components/serviceDash.svelte";
import ServiceList from "$Components/serviceList.svelte";
import { Site } from "$Model/site";
/** @type {import("@tryghost/content-api").PostsOrPages} */
export let services;
</script>
<svelte:head>
  <title>services - {Site.title}</title>
</svelte:head>
<Navbar menu={Site.menu} />
<main class="prose lg:prose-xl" >
  <CategoryMenu menu={Site.serviceCategoryMenu} />
  <ServiceList services={services} />
</main>