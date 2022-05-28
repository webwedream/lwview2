<script>
import site from "$Model/site";


  
  /** @type {import("@tryghost/content-api").PostsOrPages} */
  export let services;
</script>
<!-- service list container -->
<div class="grid grid-cols-2 lg:grid-cols-3" >
  {#each services as serv }
    <div class="card" >
      <div class="card-title" ><a class="btn btn-link" href={"/service/"+serv.slug} ><h3>{serv.title}</h3></a></div>
      <div class="card-body" ><p>{serv.excerpt}</p></div>
      <div class="card-actions" ><a class="btn btn-link" href={"/service/"+serv.slug} >Read More</a></div>
    </div>
  {/each}
</div>