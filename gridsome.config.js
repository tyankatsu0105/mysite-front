const path = require("path");
const { DefinePlugin } = require("webpack");
const env = require(path.join(__dirname, "/config/env.js"));
// use dotenv
require("dotenv").config();

module.exports = {
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.VUE_CONTENTFUL_SPACE,
        accessToken: process.env.VUE_CONTENTFUL_ACCESS_TOKEN,
        host: "cdn.contentful.com",
        environment: process.env.VUE_CONTENTFUL_ENVIRONMENT,
        typeName: "Contentful"
      }
    }
  ],
  siteName: "Tyankatsu Sketch Book",
  chainWebpack: config => {
    config.plugin("env").use(DefinePlugin, [env.getEnvs()]);
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [
            path.resolve(`${__dirname}/src/styles/`, "variables/importer.scss"),
            path.resolve(`${__dirname}/src/styles/`, "mixins/importer.scss")
          ]
        })
        .end();
    });
  }
};
