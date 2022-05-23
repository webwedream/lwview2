<script>
import TeamActions from "./teamActions.svelte";

/** @type {import("@prisma/client").Team} */
export let team;
let teamRaw = {
  name: team.name,
  role: team.role,
  description: team.description
};
let isEdit=false;
let isDel = false;
let save = false;
let errorMsg = "";
async function toggleSave() {
  try {
    const resp = await fetch("/user/editTeam-"+team.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(teamRaw)
    });
    /** @type {{team: import("@prisma/client").Team}} */
    const fetchedTeam = await resp.json();
    if (fetchedTeam.team) {
      save = true;
      isEdit = false;
    } else {
      save = false;
      errorMsg = fetchedTeam.message;
    }
  } catch (error) {
    console.error(error);
    errorMsg = error;

  }
}

/**
 * 
 * @param {CustomEvent<{action: string}>} evt
 */
function isEditOrDelete(evt) {
  if (evt.detail.action == "edit") {
    isEdit = true;
    isDel = false;
  } else {
    isEdit = false;
    isDel = true;
  }
}
</script>
<div class="card card-bordered" >
  <h3 class="card-title" >{save? teamRaw.name : team.name}</h3>
  <div class="card-body" >
    <p >role: {save? teamRaw.role : team.role}</p>
    <p >{save? teamRaw.description : team.description}</p>
  </div>
  <div class="card-actions" >
    <TeamActions team={team} on:action={isEditOrDelete} />
  </div>
</div>
{#if  isEdit}
  <div role="form" >
    <label class="label" >Team Name: 
      <input type="text" class="input input-bordered" bind:value={teamRaw.name} />
    </label>
    <label class="label" >Role:
      <input type="text" class="input input-bordered" bind:value={ teamRaw.role } />
    </label>
    <label class="label" >Description: 
      <textarea cols={120} class="textarea textarea-primary" bind:value={teamRaw.description} />
    </label>
    <button on:click={async (evt) => await toggleSave()} class="btn btn-primary" >Save</button>
    {#if errorMsg != ""}
      <p>{errorMsg}</p>
    {/if}
  </div>
{/if}