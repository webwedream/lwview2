<script>
import store, { Store } from "$Model/store";
import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";
</script>
{#if $Store.user.email != "" && $Store.user.role == "authenticated"}
  <slot />
  {:else if !$Store.user.role}
  <p>Loading <FaSpinner /></p>
{:else}
  <div class="prose  lg:prose-xl" >
    <h2>Sign in error 403 Forbidden.</h2>
    <p>You are not signed in please sign in. using the link below.</p>
    <a href="/signIn" >Sign in</a>
  </div>
{/if}