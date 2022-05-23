<script >
import Blogposts from "$Components/blogposts.svelte";
import Navbar from "$Components/navbar.svelte";
import { Site } from "$Model/site";
export let posts;
</script>
<svelte:head>
  <title>Blog - {Site.title}</title>
</svelte:head>
<Navbar menu={Site.menu} />
<Blogposts posts={posts} />