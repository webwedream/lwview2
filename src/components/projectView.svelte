<script>
import DashboardError from "./core/dashboardError.svelte";

  /** @type {import("@prisma/client").Project[]} */
  export let projects;
</script>
{#if projects && projects.length > 0}
  <p>project found</p>
{:else}
  <DashboardError type="Project" />
{/if}