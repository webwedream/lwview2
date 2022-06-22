<script>
import Navbar from "$Components/navbar.svelte";
import ProjectAddComponent from "$Components/projectAddComponent.svelte";
import { Site } from "$Model/site";
</script>
<svelte:head>
  <title>Add Project - {Site.title}</title>
</svelte:head>
<Navbar menu={Site.adminMenu} />
<main class="prose lg:prose-xl" >
  <h2>Add Project</h2>
  <p>A project is the most important element of Project flow plus. It is the objective and description of the goals for the work that will be done as a part of an activity. It could describe a new feature for an application, fixing of major time consuming bugs, regular business activities or testing that has to be done on a regular basis.</p>
  <ProjectAddComponent project={{}} />
</main>