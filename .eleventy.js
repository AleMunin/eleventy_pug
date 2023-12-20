const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventySass);

	eleventyConfig.addPassthroughCopy("src/js");
	eleventyConfig.addWatchTarget("src/js/");

	
	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};

