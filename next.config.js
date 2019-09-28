module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' }
    };
  }
};

const withImages = require('next-images')
module.exports = withImages(module.exports)

const withCSS = require("@zeit/next-css");
module.exports = withCSS(module.exports);

const withSass = require("@zeit/next-sass");
module.exports = withSass(module.exports);
