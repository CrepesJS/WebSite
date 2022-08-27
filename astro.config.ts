import type { AstroUserConfig } from "astro";

import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";

export default {
	site: "https://crepes.dev",
	integrations: [
		sitemap(),
		critters(),
		compress({
			logger: 1,
		}),
	],
} as AstroUserConfig;
