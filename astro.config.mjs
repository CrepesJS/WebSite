import { defineConfig } from "astro/config";
import turbolinks from "@astrojs/turbolinks";

export default defineConfig({
	site: "https://crepes.dev",
	integrations: [turbolinks()],
	trailingSlash: "always",
});
