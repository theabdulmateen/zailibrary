module.exports = {
	mode: 'jit',
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				body: ['Arapey'],
				caption: ['Khula'],
				logo: ['Italianno'],
			},
		},
	},
	variants: {
		extend: {},
	},
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	plugins: [require('@tailwindcss/typography')],
}
