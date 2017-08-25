const webpack = require("webpack");
const merge = require('webpack-merge');

// Webpack configurations
const commonConfig = require("./webpack.common.js");
const devConfig = require("./webpack.dev.js");
const prodConfig = require("./webpack.prod.js");

var TARGET = process.env.npm_lifecycle_event;

if (TARGET === "start") {
  module.exports = merge(commonConfig, devConfig);
} else if (TARGET === "build") {
  module.exports = merge(commonConfig, prodConfig);
}