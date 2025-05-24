module.exports = function () {
  return function includeTag(content) {
    const replacedContent = content.replaceAll(
      "Annotation Hub Enterprise",
      "LSE"
    );

    return replacedContent;
  };
};
