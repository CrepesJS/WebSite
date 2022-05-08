import { defineConfig } from "astro/config";
import critters from "astro-critters";
import compress from "astro-compress";

export default defineConfig({
	// TODO Place your site URL here
	// site: "",
	integrations: [
		critters({
			preload: "body",
			inlineFonts: true,
		}),
		compress(),
	],
});
