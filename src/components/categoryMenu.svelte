<script>
  /** @type {{to: string, text: string}[]} */
  export let menu;
</script>
<h2>Categories</h2>
<div class="menu menu-horizontal" >
  {#each menu as menuItem}
    <a class="btn btn-link" href={menuItem.to} >{menuItem.text}</a>
  {/each}
</div>