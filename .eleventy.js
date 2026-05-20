module.exports=function (eleventyConfig) {
    eleventyConfig.ignores.add("README.md");

    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("icons");
    eleventyConfig.addPassthroughCopy("certificate");
    eleventyConfig.addPassthroughCopy("scripts");
    eleventyConfig.addPassthroughCopy("files");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("sitemap.xml");

    // eleventyConfig.addPassthroughCopy("**/*.js");

    return{
        templateFormats: ["njk", "html", "md", "liquid"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
};
