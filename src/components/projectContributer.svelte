<script>
import ProjectAddContributer from "./projectAddContributer.svelte";

  /** @type {import("@prisma/client").User[]} */
  export let Contributers;
</script>
<h3>Contributers</h3>
<ProjectAddContributer />
<table class="table" >
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {#each Contributers as contrib }
      <tr>
        <td><a class="btn btn-link" href={"/user/profileGet-"+contrib.id} >{contrib.name}</a></td>
        <td>{contrib.role}</td>
        <td><button class="btn btn-square">Actions</button></td>
      </tr>
    {/each}
  </tbody>
</table>