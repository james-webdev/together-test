const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
	trailingSlash: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**i.postimg.cc",
			},
		],
		formats: ["image/avif", "image/webp"],
	},
	async redirects() {
		return require("./redirects.json");
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
});
