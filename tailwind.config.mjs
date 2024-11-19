/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			background: 'var(--background)',
			text: 'var(--text)',
			primary: 'var(--primary)',
			secondary: 'var(--secondary)',
			accent: 'var(--accent)',
			primaryHighlightText: 'var(--primaryHighlightText)',
			secondaryHighlightText: 'var(--secondaryHighlightText)',
		  },
		},
	},
	plugins: [],
}