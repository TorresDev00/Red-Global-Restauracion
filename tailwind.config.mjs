/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				bebas: ['Bebas Neue Bold', 'Impact', 'Arial Black', 'sans-serif'],
				levenim: ['Levenim MT', 'Trebuchet MS', 'Verdana', 'sans-serif'],
			},
			animation: {
				scroll: "scroll 25s linear infinite",
			},
			keyframes: {
				scroll: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-50%)" },
				},
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
