import { defineConfig } from "astro/config";
import critters from "astro-critters";
import compress from "astro-compress";

export default defineConfig({
	site: "https://crepes.dev",
	experimental: {
		integrations: true,
	},
	integrations: [critters(), compress()],
});
