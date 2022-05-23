<script>
import Navbar from "$Components/navbar.svelte";
import TeamSingle from "$Components/teamSingle.svelte";
import { Site } from "$Model/site";
/** @type {import("@prisma/client").Team} */
export let team;
/** @type {string} */
export let message;
</script>
<Navbar menu={Site.adminMenu} />
<svelte:head>
  <title>{team.name? team.name : ""} - {Site.title}</title>
</svelte:head>
{#if team}
  <main>
    <TeamSingle team={team} />
  </main>
{:else}
   <p>{message}</p>
{/if}