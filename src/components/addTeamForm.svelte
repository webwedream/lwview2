<script>
import { goto } from "$app/navigation";
import { createEventDispatcher } from "svelte";
  import FaQuestion from "svelte-icons/fa/FaQuestion.svelte";
  const dispatch = createEventDispatcher();
  let formState = {
    name: "",
    description: "",
    role: ""
  };
  let helpText = {
    description: {
      show: false,
      text: "Discribe what this team is accountable for and other things of importance such as the over all role of the team in the organization."
    }, // end description
    role: {
      show: false,
      text: "The role describes the functions of the team in one to three words. E.G. Testing. You could even use the primary application the team supports in the text."
    } // end role
  };
  let showCreate = true;
  /**
   * 
   * @param {MouseEvent} evt
   */
  async function createClicked(evt) { 
    evt.preventDefault();
    const resp = await fetch("/user/createTeam", {
      headers: {
        "Content-Type": "application/json"
      }, // end headers.
      method: "POST",
      body: JSON.stringify(formState)
    });
    if (resp.ok) {
      showCreate=false;
      dispatch("team", {team: await resp.json()});
    }
  }
</script>
{#if showCreate}
<h3 aria-live="assertive" >Create new team</h3>
<form>
  <label class="label" >Team Name: *
    <input type="text" class="input" name="name" bind:value={formState.name} required />
  </label>
  <label class="label" >Description: *
    <textarea cols={100} name="description" required bind:value={formState.description} class="textarea textarea-bordered" ></textarea>
    <button on:click={evt => {
      evt.preventDefault();
      helpText.description.show = !helpText.description.show
    }} class="btn btn-ghost" >Help <FaQuestion /> </button>
  </label>
  {#if helpText.description.show}
    <p>{helpText.description.text}</p>
  {/if}
  <label class="label" >Role: *
    <input required type="text" class="input" bind:value={formState.role} />
    <button on:click={evt => {
      evt.preventDefault();
      helpText.role.show = !helpText.role.show
    }} >Help <FaQuestion /> </button>
  </label>
  {#if helpText.role.show}
    <p>{helpText.role.text}</p>
  {/if}
  <button class="btn btn-primary" on:click={createClicked} >Create</button>
</form>
{/if}