module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{html,js,css,json,png,svg}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};