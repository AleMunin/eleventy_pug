const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {

	// Eleventy sass plugin

	eleventyConfig.addPlugin(eleventySass);


	// This just lets media go straight through.

	eleventyConfig.addPassthroughCopy("src/assets");

	// Eleventy shouldn't need this but I was told it was good measure

	eleventyConfig.setTemplateFormats(["md", "pug"]);



	// Adding posts collection to js so we can loop it

	//eleventyConfig.addCollection("posts", function(collection) {
	//	return collection.getFilteredByGlob("./posts/*.md");
	 // });


	//This is another attemopt at this:

	eleventyConfig.addCollection("pages", function(collection) {
		return collection.getFilteredByGlob("src/pages/*.md");
	});


	eleventyConfig.addCollection("posts", function(collection) {
		return collection.getFilteredByGlob("src/posts/*.md");
	});

	// Configuring usage folders
	
	return {
		dir: {
			input: "src",
			output: "public",
		},
	};



};

