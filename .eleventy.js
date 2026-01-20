import pugPlugin from "@11ty/eleventy-plugin-pug";

export default async function (eleventyConfig) {
    eleventyConfig.addPlugin(pugPlugin);
    eleventyConfig.setInputDirectory("src");


    eleventyConfig.addPassthroughCopy("src/js");

    //Collections -------------------------\\

    eleventyConfig.addCollection("all_posts", function(collection) {
        return collection.getFilteredByGlob("src/posts/**/*.md");
    });

}
