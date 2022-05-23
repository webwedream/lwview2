<script>
  /** @type {{to: "", text: ""}[]} */
  export let menu;
</script>
<nav class="navbar" >
  <ul class="navbar-start" >
    {#each menu as mitem}
      <li><a class="btn btn-link text-lg" href={mitem.to} >{mitem.text}</a></li>
    {/each}
  </ul>
</nav>