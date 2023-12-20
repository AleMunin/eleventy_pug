const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventySass);

	eleventyConfig.addPassthroughCopy("src/js");
	eleventyConfig.addWatchTarget("src/js/");

	eleventyConfig.addPassthroughCopy("src/img");
	eleventyConfig.addWatchTarget("src/img/");

	eleventyConfig.addPassthroughCopy("src/vid");
	eleventyConfig.addWatchTarget("src/vid/");
	
	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};

