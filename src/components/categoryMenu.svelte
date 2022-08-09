<script>
  /** @type {{to: string, text: string}[]} */
  export let menu;
</script>
<h2>Categories</h2>
<div class="flex flex-row space-x-1 m-2 flex-wrap items-stretch" >
  {#each menu as menuItem}
    <a class="block px-4 py-2 text-sm font-medium text-blue-800 rounded-lg hover:text-blue-600 hover:cursor-pointer m-2" href={menuItem.to} >{menuItem.text}</a>
  {/each}
</div>