module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/blog",
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};
