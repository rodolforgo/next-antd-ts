const withLess = require("next-with-less");
const path = require("path");

const pathToLessFileWithVariables = path.resolve(
  "styles/theme.less"
);

module.exports = withLess({
  lessLoaderOptions: {
    /* ... */
    additionalData: (content) =>
      `${content}\n\n@import '${pathToLessFileWithVariables}';`,
  },
});