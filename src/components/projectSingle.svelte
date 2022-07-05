<script>
import DashboardError from "./core/dashboardError.svelte";
import GoInfo from 'svelte-icons/go/GoInfo.svelte';
import ProjectQuickActions from "./projectQuickActions.svelte";
import ProjectContributer from "./projectContributer.svelte";

  /** @type {import("@prisma/client").Project} */
  export let project;
</script>

{#if project}
  <div class="container m-2">
    <ProjectQuickActions id={project.id} />
    <h1>{project.name}</h1>
    <p>status: {project.status.replaceAll("_", " ").toLowerCase()} <GoInfo /></p>
    <p>type: {project.type.replaceAll("_", " ").toLowerCase()} </p>
    <p>{project.description}</p>
    <p>start date: {project.startDate? new Date(project.startDate) : "No date was selected"} </p>
    <p>estimated end date: {project.estimatedEndDate? new Date(project.estimatedEndDate) : "No date was selected"} </p>
    <p>Actual end Date: {project.actualEnd && project.status != "COMPLETE"? new Date(project.actualEnd) : "Project has not completed yet"} </p>
    <h2>Objectives</h2>
    {#if project.objectives}
       <p>{@html project.objectives}</p>
    {:else}
      <p>No objectives were defined.</p>
    {/if}
    <ProjectContributer Contributers={project.contributers} />
  </div>
{:else}
  <DashboardError type="Project" />
{/if}