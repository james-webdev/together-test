module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: (theme) => ({
			maxWidth: "100%",
			center: true,
			padding: {
				DEFAULT: theme("spacing.6"),
				lg: theme("spacing.12"),
			},
		}),
		extend: {
			keyframes: {
				flash: {
					'0%': { opacity: 0 },
					'50%': { opacity: 1 },
					'100%': { opacity: 0 }
				},

			},
			animation: {
				flash: 'flash 1s ease-in-out infinite',
				slowflash: 'flash 2s ease-in-out infinite',
				slowslowflash: 'flash 2500ms ease-in-out infinite',
			}
		},
		fontFamily: {
			sans: [
				"Bolton, sans-serif",
				{},
			],
			display: [
				"Archia, sans-serif",
				{},
			],
		},

	},
	plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms")],
};
