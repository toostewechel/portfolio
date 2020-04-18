const withPlugins = require("next-compose-plugins");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    [optimizedImages, {}],
    [
      withMDX,
      {
        pageExtensions: ["js", "jsx", "md", "mdx"],
      },
    ],
  ],
  {
    exportTrailingSlash: true,
    exportPathMap: function () {
      return {
        "/": { page: "/" },
        "/toegankelijke-online-dienstverlening-ontwerpen-in-de-zorg": {
          page: "/toegankelijke-online-dienstverlening-ontwerpen-in-de-zorg",
        },
      };
    },
  }
);
