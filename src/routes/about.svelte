<script>
import Navbar from "$Components/navbar.svelte";
import { Site } from "$Model/site";
import FaCode from "svelte-icons/fa/FaCode.svelte";
import FaCompass from "svelte-icons/fa/FaCompass.svelte";
import FaBriefcase from "svelte-icons/fa/FaBriefcase.svelte";
</script>
<svelte:head>
  <title>About Us - {Site.title}</title>
</svelte:head>
<Navbar menu={Site.menu} />
<main class="format lg:format-lg" >
<div class="featured" >
  <div class="featuredCard" >
      <h1>About Us.</h1>
      <p>LWview is a family business which strives to help other companies turn their ambitious technical goals into reality. By creating world class project management software that they can use to guide them in the creation and management of technical projects from design stage to documentation. And by offering many services that smaller and medium sized businesses who are trying to upgrade their technical or development processes  would have trouble getting.</p>
  </div>
  <div class="featuredGrid" >
      <div class="featuredCard" >
          <div class="featuredImg" >
            <FaCode  />
          </div>
          <h2 class="mb-2 text-xl font-bold dark:text-white">Founder Omar Hamdan</h2>
          <p>A developer and founder with over three years of experience developing,deploying, and designing all kinds of applications from ETL pipelines and reports, to reusable libraries and frameworks, to web applications with small user bases of a few hundred people up to ones for millions.</p>
          <p>In that time, he worked with all kinds of project managers and different teams, and while he found they generally tried to use good software development methodologies and tools for keeping track of the project tasks, the results were often varied in how successful they were. This was because they addressed a small subset of the software development process did not connect these good practices together, and were not flexable to different development approaches or designing.</p>
          <p>He always wanted to be able to help lots of companies solve their technical challenges and loved doing all kinds of development. This is why he offers all these services today. And the software he is building is his attempt to help even more people than he ever could even with an army of workers behind him.</p>
      </div>
      <div class="featuredCard col-span-2" >
          <div class="featuredImg" >
            <FaCompass />
          </div>
          <h2 >Our values</h2>
          <ul>
            <li>Relentless curiosity. We will always dig deeply into every task we take on. And produce results beyond your wildest expectations.</li>
            <li>Truethful. Because we want to be able to sleep soundly at night. If we can't do something in house you will know. That is why we try so hard to give customers a sence of what we can do with the services we provide.</li>
            <li>Excepting. We will do business with anyone without discriminating against any personal attributes or beliefs of a person.</li>
            <li>Intense resolve. When we commit to taking on a project, we won’t rest until it is done and push past any obstacle.</li>
          </ul>
      </div>
      <div class="featuredCard" >
          <div class="featuredImg" >
              <FaBriefcase />
          </div>
          <h2>Why us.</h2>
          <p>Choose our business if you want personal service. We are a small family firm that is growing, Every customer will be the most important one to us. We want to hear your feedback about the application that we are making for the public shortly. And we want to hear about your business problems too.</p>
          <p>We aren't very opinionated on the technology we use. So we will give you the best solution that matches your business needs and timelines.</p>
      </div>
</div> <!-- End of grid. -->
</main>