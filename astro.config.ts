import compress from "astro-compress";
import critters from "astro-critters";
import sitemap from "@astrojs/sitemap";

import type { AstroUserConfig } from "astro";

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
