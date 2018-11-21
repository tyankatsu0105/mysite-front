const path = require("path");
const { DefinePlugin } = require("webpack");
const env = require(path.join(__dirname, "/config/env.js"));
// use dotenv
require("dotenv").config();

module.exports = {
  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: process.env.VUE_APP_BASE_URL,
        typeName: "WordPress",
        perPage: 100,
        concurrent: 10,
        routes: {
          post: "/:year/:month/:day/:slug",
          post_tag: "/tag/:slug"
        }
      }
    }
  ],
  siteName: "tyankatsu",
  chainWebpack: config => {
    config.plugin("env").use(DefinePlugin, [env.getEnvs()]);
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [
            path.resolve(`${__dirname}/src/styles/`, "variables/importer.scss")
          ]
        })
        .end();
    });
  }
};
