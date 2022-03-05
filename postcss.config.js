module.exports = {
	plugins: {
		'postcss-import': {},
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NEXT_PUBLIC_PROD === 'PRODUCTION' ? { cssnano: {} } : {}),
	},
};
