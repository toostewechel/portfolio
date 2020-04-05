const withPlugins = require("next-compose-plugins");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [optimizedImages, {}],
  [
    withMDX,
    {
      pageExtensions: ["js", "jsx", "md", "mdx"],
    },
  ],
]);
