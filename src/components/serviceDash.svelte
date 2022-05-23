<script>
  import FaSpeakerDeck from 'svelte-icons/fa/FaSpeakerDeck.svelte';
  import FaBook from 'svelte-icons/fa/FaBook.svelte';
  /** @type {import("@tryghost/content-api").PostsOrPages} */
  export let services;
</script>
<h2>Other Services.</h2>
<p>We also offer alot of technical services that small and medium sized firms might need and would otherwise have issues acquiring them without a massive investment. These services are usually geared towards completing technical projects or designing them.</p>
<!-- Todo: Complete service category section. -->
{#if services && services.length > 0}
  <div class="grid grid-cols-2 lg:grid-cols-3" role="list" >
    {#each services as service}
    <div class="card card-bordered" role="listitem" >
      <a href={"/service/"+service.slug} class="btn btn-link card-title"><h3 >{ service.title }</h3></a>
      <div class="card-body" >
        <p>{service.excerpt}</p>
        <a class="btn btn-link" href={"/service/"+service.slug} >Read more <FaBook /> </a>
      </div>
      <div class="card-actions" >
        <a href="/contactUs" class="btn btn-info" >Contact Us <FaSpeakerDeck /> </a>
      </div>
    </div>
    {/each}
  </div>
{/if}