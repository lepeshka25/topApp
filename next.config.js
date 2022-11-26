// eslint-disable-next-line no-undef
module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.(js|ts)x?$/,
			use: ['@svgr/webpack']
		});

		return config;
	}
};