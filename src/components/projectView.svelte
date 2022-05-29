<script>
import DashboardError from "./core/dashboardError.svelte";

  /** @type {import("@prisma/client").Project[]} */
  export let projects;
</script>
{#if projects && projects.length > 0}
  <h1>Project Dashboard</h1>
  <div class="grid grid-cols-2">
    {#each projects as proj}
      <div class="card card-compact" >
      <a class="btn btn-link" href={"/user/projectGet-"+proj.id} >{proj.name}</a>
      <div class="badge badge-outline" ><p>type: {proj.type.replaceAll("_"," ").toLowerCase()}</p></div>
      <div class="badge badge-outline" ><p>status: {proj.status.replaceAll("_", " ").toLowerCase()}</p></div>
      </div>
    {/each}
  </div>
{:else}
  <DashboardError type="Project" />
{/if}