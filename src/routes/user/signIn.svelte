<script>
import { goto } from "$app/navigation";
import { Site } from "$Model/site";
import Navbar from "../../components/navbar.svelte";

import {Store} from "../../model/store";

  import { AuthC } from "../../model/supabaseClient";
  let user = AuthC.user();
  Store.update(s => {
    if (s.user.email == "" && user) {
      console.log("ran");
      s.user = user;
      return s;
    }
    return s;
  });
  Store.subscribe(s => {
    if (s.user.email != "" && s.user == user && user) {
      if (typeof window != 'undefined') {
        localStorage.setItem("user", JSON.stringify(s));
      }
      goto("/user/dashboard").then().catch(err => console.error(err));
    }
  });
</script>
<svelte:head>
  <title>Sign in - {Site.title}</title>
  <meta name="robots" content="noindex,nofollow" />
</svelte:head>
<Navbar menu={Site.menu} />
<button on:click="{async () => await AuthC.signIn({provider: 'google'}, {redirectTo: "http://localhost:3000/user/dashboard"})}" >Sign in with Google.</button>