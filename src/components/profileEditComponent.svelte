<script>


  /** @type {import("@prisma/client").User} */
  export let user;
  let rawUser = {
    name: user.name? user.name : "",
    role: user.role? user.role : ""
  };
  let message = "";
  let updated = false;
  /**
   * 
   * @param {MouseEvent} evt
   */
  async function handleUpdate(evt) {
    evt.preventDefault();
    try {
      const resp = await fetch("/user/profileUpdate", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(rawUser)
      });
      if (resp.status == 200) {
        updated = true;
      } else {
        updated = false;
        message = (await resp.json()).message;
      }
    } catch (error) {
      console.error(error);
    }
  }
</script>
<main>
  <h2>Edit your profile</h2>
  <p>Please update  the information below and click update.</p>
  <form class="grid grid-cols-2 lg:grid-cols-3" >
    <label class="label label-text" >Name: *
      <input class="input" type="text" bind:value={rawUser.name} required />
    </label>
    <label class="label label-text" >Role: *
      <input class="input" type="text" bind:value={rawUser.role} required />
    </label>
    <button class="btn btn-primary" on:click={handleUpdate} >Update</button>
  </form>
  <!-- handle update -->
  {#if updated }
    <div class="alert alert-success" >
      <h3>Profile Successfully updated.</h3>
      <p>You have successfully updated your profile. Click the button below to go back to the teams dashboard</p>
      <a class="btn btn-link" href="/user/dashboard" >Back to dashboard</a>
    </div>
  {/if}
  {#if message != "" }
    <h3>Profile Update failed</h3>
    <p>The profile update failed do to the following error {message}</p>
  {/if}
</main>