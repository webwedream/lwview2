<script>
  /**
   * @type {import("@prisma/client").User}
   */
  export let user;
  import { goto, afterNavigate } from '$app/navigation';
  let prevPage = "";
  afterNavigate((nav) => {
    prevPage = nav.from?.pathname;
  });
</script>
<div class="card" >
  <div class="card-title" >
    <h2>{user.name}&apos;s Profile</h2>
    <a href={prevPage} class="btn btn-link" >Back</a>
  </div>
  <div class="card-body" >
    <p>role: {user.role}</p>
    <p>email: {user.email}</p>
  </div>
  <div class="card-actions" >
    <a href={prevPage} class="btn btn-link" >Back</a>
  </div>
</div>