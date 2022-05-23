<script>
  import DOMPurify from 'isomorphic-dompurify';
  /** @type {import("@tryghost/content-api").PostOrPage} */
  export let post;
</script>
<main class="prose lg:prose-xl" >
  {@html DOMPurify.sanitize( post.html.replaceAll("http://localhost:2368", "http://209.126.6.227:3000")) }
</main>