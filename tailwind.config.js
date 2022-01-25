const remCalc = (px) => {
	return `${px / 16}rem`;
};

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
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
			fontSize: {
				'15px': remCalc(15),
				'18px': remCalc(18),
				'24px': remCalc(24),
				'36px': remCalc(36),
				'48px': remCalc(48),
			},
			lineHeight: {
				'110perc': '110%',
			},
			height: {
				'screen-minus-header': 'calc(100vh - 108px)',
			},
			spacing: {
				'0': 0,
				'3px': remCalc(3),
				'5px': remCalc(5),
				'15px': remCalc(15),
				'20px': remCalc(20),
				'25px': remCalc(25),
				'30px': remCalc(30),
				'108px': remCalc(108),
				'1/2-screen': '50vh',
			},
			zIndex: {
				'-1': '-1',
				'2': '2',
				'3': '3',
			},
			minWidth: {
				'516': '516px',
			}
		},
	},
	variants: {
		extend: {
			scale: ['group-hover'],
		}
	}
}
