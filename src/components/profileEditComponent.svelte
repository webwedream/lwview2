<script>


  /** @type {import("@prisma/client").User} */
  export let user;
  let rawUser = {
    name: "",
    role: "select one"
  };
</script>
<main>
  <h2>Edit your profile</h2>
  <p>Please validate that the below information is correct and click update.</p>
  <form class="grid grid-cols-2 lg:grid-cols-3" >
    <label class="label" >Name: *
      <input type="text" bind:value={rawUser.name} />
    </label>
  </form>
</main>