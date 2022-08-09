<script>
  import FaSpeakerDeck from 'svelte-icons/fa/FaSpeakerDeck.svelte';
  import FaBook from 'svelte-icons/fa/FaBook.svelte';
import CategoryMenu from './categoryMenu.svelte';
import { Site } from '$Model/site';
  /** @type {import("@tryghost/content-api").PostsOrPages} */
  export let services;
</script>
<h1>All Services.</h1>
<p>We also offer alot of technical services that small and medium sized firms might need and would otherwise have issues acquiring them without a massive investment. These services are usually geared towards completing technical projects or designing them.</p>
<CategoryMenu menu={Site.serviceCategoryMenu} />
{#if services && services.length > 0}
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-stretch" >
    {#each services as service}
    <div class="max-w-lg mx-auto text-center lg:text-left lg:mx-0" role="listitem" >
      <a href={"/service/"+service.slug} class="text-3xl font-bold sm:text-4xl" ><h3 >{ service.title }</h3></a>
      <p class="mt-4" >{service.excerpt}</p>
      <div class="flex flex-row space-x-1 m-2" >
        <a class="block px-4 py-2 text-sm font-medium text-blue-800 rounded-lg hover:text-blue-600 hover:cursor-pointer" href={"/service/"+service.slug} >Read more <FaBook /> </a>
        <a href="/contactUs" class="block px-4 py-2 text-sm font-medium text-blue-800 rounded-lg hover:text-blue-600 hover:cursor-pointer" >Contact Us <FaSpeakerDeck /> </a>
      </div>
    </div>
    {/each}
  </div>
{/if}