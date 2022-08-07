<script>
import Contactform from "$Components/contactform.svelte";
import Navbar from "$Components/navbar.svelte";
import { Site } from "$Model/site";



</script>
<svelte:head>
  <title>Contact Us - {Site.title}</title>
</svelte:head>
<Navbar menu={Site.menu} />
<main>
  <Contactform />
</main>