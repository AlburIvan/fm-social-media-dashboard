module.exports = {
	purge: [],
	theme: {
		fontFamily: {
			display: [ "Inter", "sans-serif"],
			body: [ "Inter", "sans-serif"],
		},
		screens: {
            sm: "375px",
            md: "648px",
			lg: "1440px",
        },
        letterSpacing: {
            wideful: '.35em'
        },
		extend: {
			colors: {
                cardHover: "var(--card-hover)",
				toggle: "var(--toggle-color)",
				background: "var(--background-color)",
				topBackground: "var(--top-background-pattern)",
				cardBackground: "var(--card-background)",
				text: "var(--text-color)",
				cardText: "var(--card-text)",

				limeGreen: "hsl(163, 72%, 41%)",
				brightRed: "hsl(356, 69%, 56%)",
				facebook: "hsl(208, 92%, 53%)",
				twitter: "hsl(203, 89%, 53%)",
				youtube: "hsl(348, 97%, 39%)",
			},
		},
	},
	variants: {},
	plugins: [],
};
