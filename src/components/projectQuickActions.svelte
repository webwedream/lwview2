<script>
  import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
import FaCopy from 'svelte-icons/fa/FaCopy.svelte';
  /** @type {string} */
  export let id;
</script>
<div class="menu menu-horizontal" >
  <a class="btn btn-link" href={"/user/projectAdd"} >Add to new project</a>
  <a class="btn btn-link" href={"/user/profileCopy-"+id} >Copy to new project</a>
  <a class="btn btn-link" href={"/user/projectEdit-"+id} >Edit <FaEdit /></a>
</div>