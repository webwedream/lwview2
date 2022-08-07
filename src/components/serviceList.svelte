<script>
import site from "$Model/site";


  
  /** @type {import("@tryghost/content-api").PostsOrPages} */
  export let services;
</script>
<!-- service list container -->
<div class="grid grid-cols-2" >
  {#each services as serv }
    <div class="" >
      <div class="h-1/3 w/1/2" >
        <a class="btn btn-link block" href={"/service/"+serv.slug} ><h3>{serv.title}</h3></a>
        <p class="block" >{serv.excerpt}</p>
      </div>
      <div class="" ><a class="btn btn-link" href={"/service/"+serv.slug} >Read More</a></div>
    </div>
  {/each}
</div>