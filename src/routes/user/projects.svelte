<script>
import Navbar from "$Components/navbar.svelte";
import ProjectView from "$Components/projectView.svelte";
import { Site } from "$Model/site";
/** @type {import("@prisma/client").Project[]} */
export let projects;
</script>
<svelte:head>
  <title>Projects - {Site.title}</title>
</svelte:head>
<Navbar menu={Site.adminMenu} />
<main>
  <ProjectView projects={projects} />
</main>