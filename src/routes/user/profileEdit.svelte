<script>
import Navbar from "$Components/navbar.svelte";
import ProfileEditComponent from "$Components/profileEditComponent.svelte";
import { Site } from "$Model/site";
/** @type {import("@prisma/client").User} */
export let user;
</script>
<svelte:head>
  <title>Edit your profile - {Site.title}</title>
</svelte:head>
<Navbar menu={Site.adminMenu} />
<ProfileEditComponent user={user} />