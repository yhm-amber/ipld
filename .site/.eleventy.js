module.exports = function(eleventyConfig) {
	const markdownIt = require("markdown-it");
	const markdownItAnchor = require("markdown-it-anchor");
	let markdownLibrary = markdownIt({
		html: true,
	}).use(markdownItAnchor, {
		permalink: true, // Generate an anchor pointing back to self, for human ease in grabbing links to sections.
		permalinkSymbol: "", // Preferable to do this with empty string, and add a visual character in CSS, because the anchor tag is placed inside the hN tag.
		permalinkSpace: false, // Again, please don't add actual text to the inside of the hN tag.
		level: [2, 3, 4, 5, 6] // h1 tags are for page titles, and are generally not useful to jump to, so don't bother making anchors for those.
	});
	eleventyConfig.setLibrary("md", markdownLibrary);

	return {
		dir: {
			// The input directory is set to ".." so that we achieve these two file organization goals:
			//  1. all of the infrastructure for eleventy is in a single directory, keeping the project root tidy;
			//  2. all of the actual content is at the project repo root (meaning paths on github and in the web also "happen" to align).
			input:   "..",
			output:  "_output",
			// These reiterate ".site" because they're joined to the input path, which is "..".
			data:    ".site/_data",
			layouts: ".site/_layouts"
		}
	}
}
