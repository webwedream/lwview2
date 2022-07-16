<script>
import FaPlus from "svelte-icons/fa/FaPlus.svelte";
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
/** @type {import("@prisma/client").User[]} */
let searchResults = [];
/**
 * 
 * @param {Event} evt
 */
async function handleChange(evt) {
  if (searchNameOrEmail.length >= 2) {
    /** @type {import("@prisma/client").User[]} */
    const resp = await (await fetch("/user/projectContribSearch-"+encodeURIComponent(searchNameOrEmail))).json();
    searchResults = resp;
  }
}
</script>
<button on:click={handleExpand} aria-expanded={expanded} class="btn btn-primary" >Add <FaPlus /></button>
{#if expanded}
<div class="modal visible" >
  <label class="label">Name or Email:
    <input on:change={handleChange} class="input" type="text" bind:value={searchNameOrEmail} />
  </label>
</div>
{/if}
