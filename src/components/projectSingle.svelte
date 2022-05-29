<script>
import DashboardError from "./core/dashboardError.svelte";
import GoInfo from 'svelte-icons/go/GoInfo.svelte';

  /** @type {import("@prisma/client").Project} */
  export let project;
</script>

{#if project}
  <div class="container m-2">
    <h1>{project.name}</h1>
    <p>status: {project.status.replaceAll("_", " ").toLowerCase()} <GoInfo /></p>
    <p>type: {project.type.replaceAll("_", " ").toLowerCase()} </p>
    <p>{project.description}</p>
    <p>start date: {project.startDate? project.startDate.toDateString() : "No date was selected"} </p>
    <p>estimated end date: {project.estimatedEndDate? project.estimatedEndDate.toDateString() : "No date was selected"} </p>
    <p>Actual end Date: {project.actualEnd && project.status != "COMPLETE"? project.actualEnd.toDateString() : "Project has not completed yet"} </p>
    <h2>Objectives</h2>
    {#if project.objectives}
       <p>{@html project.objectives}</p>
    {:else}
      <p>No objectives were defined.</p>
    {/if}
  </div>
{:else}
  <DashboardError type="Project" />
{/if}