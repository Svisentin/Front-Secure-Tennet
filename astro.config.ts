import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

const DEV_PORT = 2121;

// https://astro.build/config
export default defineConfig({
	base: "/",
	site: "http://localhost:2121",

	output: "server",
	adapter: vercel(),

	/* Like Vercel, Netlify,… Mimicking for dev. server */
	// trailingSlash: 'always',

	server: {
		/* Dev. server only */
		port: DEV_PORT,
	},

	integrations: [
		//
		sitemap(),
		tailwind(),
	],
});
