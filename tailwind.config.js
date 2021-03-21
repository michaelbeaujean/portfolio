module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: '2em',
			center: true,
		},
		fontFamily: {
			body: ['Inter', 'Helvetica', 'sans-serif'],
		},
		extend: {
			colors: {
				'dark-grey': '#1C1B1B',
				'white': '#FFFFFF',
				'mint': '#9FDAAF',
				'baige': '#D2D2CA',
				'light-cherry': '#E0CADE',
			},
			lineHeight: {
				'110perc': '110%',
			},
			spacing: {
				'3px': '0.1875rem',
				'5px': '0.3125rem',
				'30px': '1.875rem',
			},
		},
	},
}
