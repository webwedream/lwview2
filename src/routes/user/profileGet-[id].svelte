<script>
import Navbar from "$Components/navbar.svelte";
import ProfileViewComponent from "$Components/profileViewComponent.svelte";
import { Site } from "$Model/site";
  /** @type {import("@prisma/client").User} */
  export let user;
</script>
<svelte:head>
  <title>View {user.name}&apos;s profile - {Site.title}</title>
</svelte:head>
<Navbar menu={Site.adminMenu} />
<ProfileViewComponent user={user} />