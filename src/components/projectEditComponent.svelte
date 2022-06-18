<script>
  /** @type {import("@prisma/client").Project} */
  export let project;
  let rawProject = {
    name: project.name? project.name : "",
    description: project.description? project.description : "",
    startDate: project.startDate? project.startDate.split("T")[0] : null,
    actualEnd: project.actualEnd? project.actualEnd.split("T")[0] : null,
    estimatedEndDate: project.estimatedEndDate? project.estimatedEndDate.split("T")[0] : null,
    status: project.status? project.status : "OTHER",
    type: project.type? project.type : "OTHER",
    objectives: project.objectives? project.objectives : ""
  };
  let typeMap = {
    "APPLICATION_DEVELOPMENT": "Application Development",
    "BUSINESS_ACTIVITY": "Regular Business Activity",
    "BUGFIX": "Bug fix or Testing"
  };
  let statusMap = {
    "IN_DESIGN": "In Design",
    "NOT_STARTED": "Not Started",
    "IN_PROGRESS": "In Progress",
    "COMPLETE": "Complete",
    "CANCELED": "Canceled"
  };
  let isSuccess = false;
  /**
   * 
   * @param {MouseEvent} evt
   */
  async function handleUpdate(evt) {
    evt.preventDefault();
    try {
      const res = await (await fetch("/user/projectUpdate-"+project.id, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...rawProject, startDate: rawProject.startDate? new Date (rawProject.startDate) : null, estimatedEndDate: rawProject.estimatedEndDate? new Date(rawProject.estimatedEndDate) : null, actualEnd: rawProject.actualEnd? new Date(rawProject.actualEnd) : null})
      })).json();
      if (res) {
        isSuccess = true;
      }
    } catch (error) {
      isSuccess = false;
      console.error(error);
    }
  }
</script>
<main class="prose lg:prose-xl" >
  <h2>Edit Project - {rawProject.name}</h2>
  <h3>Basic Required Info</h3>
  <label class="label label-text" >Name: *
    <input required type="text" class="input input-lg" bind:value={rawProject.name} />
  </label>
  <label class="label label-text" >Description: *
    <textarea required cols={100} type="text" class="input input-lg" bind:value={rawProject.description} ></textarea>
  </label>
  <label class="label label-text" >Type: *
    <select bind:value={rawProject.type} class="dropdown" required >
      {#each Object.keys(typeMap) as type}
        <option value={type} >{typeMap[type]}</option>
      {/each}
    </select>
  </label>
  <label class="label label-text" >Status: *
    <select class="dropdown" bind:value={rawProject.status} >
      {#each Object.keys(statusMap) as status }
        <option value={status} >{statusMap[status]}</option>
      {/each}
    </select>
  </label>
  <h3>Dates (Optional)</h3>
  <label class="label label-text" >Start Date: 
    <input type="date" bind:value={rawProject.startDate} class="input" />
  </label>
  <label class="label label-text" >Estimated end date:
    <input class="input" type="date" bind:value={rawProject.estimatedEndDate} />
  </label>
  <label class="label label-text" >actual end date:
    <input class="input" type="date" bind:value={rawProject.actualEnd} />
  </label>
  <h3>Objectives (optional)</h3>
  <label class="label label-text" >Objectives: 
    <textarea class="textarea" cols={100} bind:value={rawProject.objectives} ></textarea>
  </label>
  <button on:click={handleUpdate} class="btn btn-primary">Update</button>
  {#if isSuccess }
    <div class="alert alert-success" >
      <h4>Project Updated successfully</h4>
      <p>You have successfully updated the {rawProject.name} project</p>
      <a class="btn btn-link" href={"/user/projectGet-"+project.id} >Back to view mode</a>
    </div>
  {/if}
</main>