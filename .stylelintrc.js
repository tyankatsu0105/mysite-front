module.exports = {
  extends: [
    "stylelint-config-sass-guidelines",
    "stylelint-config-recess-order",
    "stylelint-config-prettier"
  ],
  rules: {
    "order/properties-alphabetical-order": null,
    "selector-class-pattern": null,
    "max-nesting-depth": 4,
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute"]
      }
    ],
    "scss/selector-no-redundant-nesting-selector": null,
    "scss/at-import-partial-extension-blacklist": null
  }
};