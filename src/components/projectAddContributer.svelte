<script>
  import { stringify } from "postcss";
import FaPlus from "svelte-icons/fa/FaPlus.svelte";
import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";
  let expanded = false;
  /**
   *
   * @param {MouseEvent} evt
   */
  async function handleExpand(evt) {
    evt.preventDefault();
    expanded = !expanded;
  }
  let searchNameOrEmail = "";

  let selectedInd = -1;
  /** @type {Promise<import("@prisma/client").User[]>} */
  let resp;
  /**
   *
   * @param {Event} evt
   */
  async function handleChange(evt) {
    if (searchNameOrEmail.length >= 2) {
      resp = await fetch(
          "/user/projectContribSearch-" + encodeURIComponent(searchNameOrEmail)
        );
    } 
  }
</script>

<button on:click={handleExpand} aria-expanded={expanded} class="btn btn-primary"
  >Add <FaPlus /></button
>
{#if expanded}
  <div class="modal visible" role="form" >
    <label class="label"
      >Name or Email:
      <input
        on:change={handleChange}
        id="profs"
        class="input"
        type="text"
        bind:value={searchNameOrEmail}
        autocomplete="off"
        aria-autocomplete="list"
      />
    </label>
    {#if (resp || typeof resp != "undefined") && searchNameOrEmail.length >= 2 }
      {#await resp.json()}
        <p>Loading <FaSpinner /></p>
      {:then profs}
      <ul class="menu" aria-activedescendant="profs-0" >
      {#each profs as prof, index}
        <li>
          <button id={"profs-"+index} class="btn btn-circle" 
          >{prof.name} email: {prof.email}</button>
        </li>
      {/each}
    </ul>
      {/await}
    {/if}
  </div>
{/if}