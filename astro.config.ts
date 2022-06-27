import { defineConfig } from "astro/config";
import critters from "astro-critters";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://crepes.dev",
	experimental: {
		integrations: true,
	},
	integrations: [sitemap(), critters(), compress()],
});
