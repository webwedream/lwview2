/// <reference types="@sveltejs/kit" />

interface SessionData {
  // Your session data
  uuid: string;
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		session: import("svelte-kit-cookie-session").Session<SessionData>;
		cookies: Record<string, string>; // all parsed cookies are automatically set from handleSession to avoid overhead
	}
	interface Platform {}
	interface Session extends SessionData {
	}
	interface Stuff {}
}