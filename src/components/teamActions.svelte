<script>
import { createEventDispatcher } from "svelte";

import FaEdit from "svelte-icons/fa/FaEdit.svelte";
import FaMinus from "svelte-icons/fa/FaMinus.svelte";
/** @type {import("@prisma/client").Team} */
export let team;
const dispatcher = createEventDispatcher();
function editOrDel(name) {
  if (name == "edit") {
    dispatcher("action",{action: "edit"});
  } else {
    dispatcher("action", {action: "delete"});
  }
}
</script>
<a class="btn btn-link" href="/user/dashboard" >Back to teams list</a>
<button on:click={(evt) => editOrDel("edit")} class="btn btn-square" >Edit <FaEdit /> </button>
<button on:click={(evt) => editOrDel("delete")} class="btn btn-square" >Delete <FaMinus /> </button>