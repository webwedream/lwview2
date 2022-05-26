<script>
import Navbar from "$Components/navbar.svelte";
import ProfileAlert from "$Components/profileAlert.svelte";
import TeamDashboard from "$Components/teamDashboard.svelte";
import { Site } from "$Model/site";
import { Store } from "$Model/store";
import { stringify } from "postcss";
import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";
/** @type {teams: import("@prisma/client").Team[]} */
let teams;
Store.subscribe((s) => {
  if (s.user.email) {
    teams = fetch("/user/getTeam-"+s.user.email)
    .then(r => r.json()).then(r => r);
  }
}); // end subscribe
</script>
<svelte:head>
  <title>Dash Board - {Site.title}</title>
  <meta name="robots" content="noindex,nofollow" />
</svelte:head>
<Navbar menu={Site.adminMenu} />
{#await teams}
  <p>Loading <FaSpinner /> </p>
{:then value}
<main class="prose lg:prose-xl" >
  <ProfileAlert isModified={value.isModified} />
  <TeamDashboard teams={value.teams} />
</main>
{:catch error}
  <p>Internal server error</p>
{/await}