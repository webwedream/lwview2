<script>
import Navbar from "$Components/navbar.svelte";
import ProjectSingle from "$Components/projectSingle.svelte";
import { Site } from "$Model/site";

  /** @type {import("@prisma/client").Project} */
  export let project;
</script>
<svelte:head>
  <title>{project.name? project.name : "Loading"} Project - {Site.title} </title>
</svelte:head>
<Navbar menu={Site.adminMenu} />
<main>
  <ProjectSingle project={project} />
</main>