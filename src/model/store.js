import { writable } from "svelte/store";

export const Store = writable(typeof window != "undefined" && localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")) : {
  user: {
    email: ""
  }
});

export default {
  Store
};