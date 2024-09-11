/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  'poppins': ['Poppins', 'sans-serif'],
			  'matic': ['"Matic SC"', 'cursive'],
			},
		  },
	},
	plugins: [
		require('flowbite/plugin')
	],
}
