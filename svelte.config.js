import path from "path";
import adapter from '@sveltejs/adapter-auto';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$Components: path.resolve("./src/components"),
					$Model: path.resolve("./src/model")
				} // end alias
			} // end resolve
		} // end vite
	} // end kit
};

export default config;