// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/css/main.css"],

	app: {
		head: {
			charset: "utf-16",

			title: "Bulabula AWAZI",
			meta: [
				// <meta name="viewport" content="width=device-width, initial-scale=1">
				{
					name: "description",
					content: "Information Systems and Digital Transformation"
				},
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "format-detection", content: "telephone=no" },
				{ name: "msapplication-TileColor", content: "#6366f1" },
				{ name: "theme-color", content: "#ffffff" },

				// Social
				{ property: "og:title", content: "Bulabula AWAZI" },
				{
					property: "og:description",
					content: "Information Systems and Digital Transformation"
				},
				{ property: "og:url", content: "https://bulabulaawazi.vercel.app/" },
				{
					property: "og:image",
					content: "https://bulabulaawazi.vercel.app/img/cover.jpg"
				},
				{ name: "twitter:title", content: "Bulabula AWAZI" },
				{
					name: "twitter:description",
					content: "Information Systems and Digital Transformation"
				},
				{
					name: "twitter:image",
					content: "https://bulabulaawazi.vercel.app/img/cover.jpg"
				},
				{ name: "twitter:card", content: "summary_large_image" }
			],
			link: [
				{
					rel: "stylesheet",
					href: "https://api.fontshare.com/v2/css?f[]=general-sans@1,600,400,700&display=swap"
				},
				{ rel: "icon", type: "image/x-icon", href: "/favicons/favicon.ico" },
				{
					rel: "apple-touch-icon",
					sizes: "76x76",
					href: "/favicons/apple-touch-icon.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicons/favicon-32x32.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicons/favicon-16x16.png"
				},

				{ rel: "manifest", href: "/favicons/site.webmanifest" },
				{ rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#5bbad5" }
			],
			noscript: [{ children: "Javascript is required" }]
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	modules: [
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", "acceptHMRUpdate"]
			}
		]
	]
});
