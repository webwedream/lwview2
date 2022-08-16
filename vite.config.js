import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";
/**  @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $Components: path.resolve("./src/components"),
      $Model: path.resolve("./src/model")
    } // end alias
  } // end resolve
};

export default config;