THis is just a copy paste for setting up pug in case i run into troubles. It should be set up automatically though


module.exports = function(eleventyConfig) {
  // Set up Pug
  eleventyConfig.setTemplateFormats([
    'md',
    'pug'
  ]);
  eleventyConfig.addFilter('markdown', function(value) {
    // Convert Markdown to HTML
    const md = require('markdown-it')();
    return md.render(value);
  });
};
