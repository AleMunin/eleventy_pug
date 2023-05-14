const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {

	// -------------- Plugins -------------- \\

	// Eleventy sass plugin

	eleventyConfig.addPlugin(eleventySass);


	// -------------- Passthrough -------------- \\


	// This just lets media go straight through.

	eleventyConfig.addPassthroughCopy("src/assets");

	// We also need to let js folder to go through

	eleventyConfig.addPassthroughCopy("src/js");


	// The CSS one is being used in case you don't use sass for something.
	// the eleventy plugin should deal with sass into css automatically. (iirc)

	// eleventyConfig.addPassthroughCopy("src/css");


	// -------------- Misc -------------- \\


	// Eleventy shouldn't need this but I was told it was good measure

	eleventyConfig.setTemplateFormats(["md", "pug"]);

	// -------------- COLLECTIONS -------------- \\

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


	// -------------- Configuring usage folders -------------- \\
	
	return {
		dir: {
			input: "src",
			output: "public",
		},
	};


	// -------------- 11ty must know things changed in those folders -------------- \\ 


	eleventyConfig.addWatchTarget("src/assets/");
	//eleventyConfig.addWatchTarget("src/css/"); // this is commented because 11ty-sass should be doing that already (i think)
	eleventyConfig.addWatchTarget("src/js/");

};

