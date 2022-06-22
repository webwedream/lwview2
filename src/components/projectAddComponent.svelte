<script>
import FaPlus from "svelte-icons/fa/FaPlus.svelte";

  let rawProject = {
    name: "",
    description: "",
    startDate: null,
    actualEnd: null,
    estimatedEndDate: null,
    status: "OTHER",
    type: "OTHER",
    objectives: ""
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
  async function handleAdd(evt) {
    evt.preventDefault();
  }
</script>
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
    <select class="dropdown" bind:value={rawProject.status} required >
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
  <button on:click={handleAdd} class="btn btn-primary">Add <FaPlus /></button>