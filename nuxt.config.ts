// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
	experimental: {
		payloadExtraction: false
	},
	app: {
		baseURL: '/tanuan-institute/',
    	buildAssetsDir: 'assets',
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{
					name: 'robots',
					content: 'index, follow'
				},
				{
					name: 'googlebot',
					content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
				},
				{
					name: 'bingbot',
					content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
				},
			],
			link: [
				{
					rel: 'icon',
					type: 'image/png',
					href: 'favicon.ico',
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: 'anonymous'
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
				},
			],
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: [
		'@/assets/css/app.css',
	],
	plugins: [
		{
			src: 'plugins/aos',
			mode: 'client'
		},
		{
			src: 'plugins/cookie',
			mode: 'client'
		},
		{
			src: 'plugins/header',
			mode: 'client'
		},
	],
	modules: [
		'@vite-pwa/nuxt'
	],
	pwa: {
		manifest: {
			name: 'Tanuan Institute Inc.',
			short_name: 'Tanuan Institute Inc.',
			description: 'Tanuan Institute envisions itself to be a world class institution dedicated to higher learning and modern research. It hopes to contribute to the humane and holistic development of the Filipino youth through toptier quality education.',
			theme_color: '#ffffff',
			background_color: '#ffffff',
			icons: [
				{
					src: 'pwa-64x64.png',
					sizes: '64x64',
					type: 'image/png'
				},
				{
					src: 'pwa-192x192.png',
					sizes: '192x192',
					type: 'image/png'
				},
				{
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any'  
				},
				{
					src: 'maskable-icon-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'maskable'
				}
			]
		},
		registerType: 'autoUpdate',
		workbox: {
			navigateFallback: '/tanuan-institute/',
			clientsClaim: true,
			skipWaiting: true
		},
		devOptions: {
			enabled: true,
			type: 'module',
		},
	}
})
