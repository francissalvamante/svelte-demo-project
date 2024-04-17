/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				'steel-gray': '#191a24',
				'gun-powder': '#414458'
			}
		}
	},
	plugins: []
};
