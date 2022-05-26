<script>
/** @type {boolean} */
export let isModified;
</script>
{#if !isModified}
  <div class="alert alert-info" >
    <h2>Welcome to Project Flow +</h2>
    <p>It looks like this is your first time logging into the site. Please enter the rest of your profile info using the button below.</p>
    <a href="/user/profileEdit" class="btn btn-link" >Complete your profile</a>
    <p class="cursor-help" >Note: this info is needed in order for your team members and other colleagues to find you easily.</p>
  </div>
{/if}