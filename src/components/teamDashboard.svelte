<script>
  import FaPlus from "svelte-icons/fa/FaPlus.svelte";
  import GoBroadcast from "svelte-icons/go/GoBroadcast.svelte";
import { writable } from "svelte/store";
import AddTeamForm from "./addTeamForm.svelte";
  /** @type {import("@prisma/client").Team[]} */
  export let teams;
  let statefulTeams = writable(teams);
  let isAddPressed = false;
</script>
<div>
  <h2>Teams Overview</h2>
  <div class="menu menu-horizontal" >
    <button on:click="{evt => isAddPressed = true }" class="btn btn-circle" >Create new team <FaPlus /> </button>
    <button class="btn btn-circle" >Join team <GoBroadcast /> </button>
  </div>
    {#if teams && teams.length > 0}
      <h2>My teams.</h2>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Role</th>
        </tr>
        </thead>
        <tbody>
          {#each $statefulTeams as team}
            <tr>
              <td><a href={`/user/team-${team.id}`} >{team.name}</a></td>
              <td>{team.role}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {:else }
      <p class="alert alert-info" >You aren't part of any team. Create a new one or joine an existing one.</p>
    {/if}
    {#if isAddPressed}
      <AddTeamForm on:team={async (t) => {
        statefulTeams.update((s) => {
          s.push(t.detail.team);
          return s;
        });
      }} />
    {/if}
</div>