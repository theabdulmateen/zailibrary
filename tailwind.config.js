const colors = require('tailwindcss/colors')

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
		colors: {
			...colors,
			transparent: 'transparent',
			current: 'currentColor',
		},
	},
	variants: {
		extend: {},
	},
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	plugins: [require('@tailwindcss/typography')],
}
