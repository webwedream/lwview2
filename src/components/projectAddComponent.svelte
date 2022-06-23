<script>
  import { goto } from "$app/navigation";

  import FaPlus from "svelte-icons/fa/FaPlus.svelte";

  let rawProject = {
    name: "",
    description: "",
    startDate: null,
    actualEnd: null,
    estimatedEndDate: null,
    status: "OTHER",
    type: "OTHER",
    objectives: "",
  };
  let typeMap = {
    APPLICATION_DEVELOPMENT: "Application Development",
    BUSINESS_ACTIVITY: "Regular Business Activity",
    BUGFIX: "Bug fix or Testing",
  };
  let statusMap = {
    IN_DESIGN: "In Design",
    NOT_STARTED: "Not Started",
    IN_PROGRESS: "In Progress",
    COMPLETE: "Complete",
    CANCELED: "Canceled",
  };
  let isSuccess = false;
  /**
   *
   * @param {MouseEvent} evt
   */
  async function handleAdd(evt) {
    evt.preventDefault();
    const resp = await fetch("/user/projectCreate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...rawProject,
        startDate: rawProject.startDate ? new Date(rawProject.startDate) : null,
        estimatedEndDate: rawProject.estimatedEndDate
          ? new Date(rawProject.estimatedEndDate)
          : null,
        actualEnd: rawProject.actualEnd ? new Date(rawProject.actualEnd) : null,
      }),
    });
    /** @type {import("@prisma/client").Project} */
    const postProj = await resp.json();
    if (postProj && postProj.name) {
      await goto("/user/projectGet-" + postProj.id);
    }
  }
</script>

<h2>Edit Project - {rawProject.name}</h2>
<h3>Basic Required Info</h3>
<label class="label label-text"
  >Name: *
  <input
    required
    type="text"
    class="input input-lg"
    bind:value={rawProject.name}
  />
</label>
<label class="label label-text"
  >Description: *
  <textarea
    required
    cols={100}
    type="text"
    class="input input-lg"
    bind:value={rawProject.description}
  />
</label>
<label class="label label-text"
  >Type: *
  <select bind:value={rawProject.type} class="dropdown" required>
    {#each Object.keys(typeMap) as type}
      <option value={type}>{typeMap[type]}</option>
    {/each}
  </select>
</label>
<label class="label label-text"
  >Status: *
  <select class="dropdown" bind:value={rawProject.status} required>
    {#each Object.keys(statusMap) as status}
      <option value={status}>{statusMap[status]}</option>
    {/each}
  </select>
</label>
<h3>Dates (Optional)</h3>
<label class="label label-text"
  >Start Date:
  <input type="date" bind:value={rawProject.startDate} class="input" />
</label>
<label class="label label-text"
  >Estimated end date:
  <input class="input" type="date" bind:value={rawProject.estimatedEndDate} />
</label>
<label class="label label-text"
  >actual end date:
  <input class="input" type="date" bind:value={rawProject.actualEnd} />
</label>
<h3>Objectives (optional)</h3>
<label class="label label-text"
  >Objectives:
  <textarea class="textarea" cols={100} bind:value={rawProject.objectives} />
</label>
<button on:click={handleAdd} class="btn btn-primary">Add <FaPlus /></button>
