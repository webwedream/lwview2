<script>
import Navbar from "$Components/navbar.svelte";
import ProjectEditComponent from "$Components/projectEditComponent.svelte";
import { Site } from "$Model/site";
import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";

  /** @type {import("@prisma/client").Project} */
  export let project;
</script>
<svelte:head>
  <title>Edit Project - {Site.title}</title>
</svelte:head>
{#if project}
  <Navbar menu={Site.adminMenu} />
  <ProjectEditComponent project={project} />
{:else}
   <p>Loading <FaSpinner /></p>
{/if}