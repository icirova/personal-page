module.exports=function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("icons");
    eleventyConfig.addPassthroughCopy("certificate");
    eleventyConfig.addPassthroughCopy("scripts");

    // eleventyConfig.addPassthroughCopy("**/*.js");

    return{
        templateFormats: ["njk", "html", "md", "liquid"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
};