import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://crepes.dev",
	integrations: [sitemap(), critters(), compress()],
});
