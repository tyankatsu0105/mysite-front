// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",

  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub"
  },

  snapshotSerializers: ["jest-serializer-vue"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },

  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],

  moduleFileExtensions: ["js", "vue"],

  coverageReporters: ["json-summary", "text", "lcov"]
};
