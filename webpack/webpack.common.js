const path = require("path");
const webpack = require("webpack");

// Plugins
const html = require("html-webpack-plugin");
const clean = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  devtool: "inline-source-map",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|svg|gif)/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new clean(["dist"], { root: process.cwd(), verbose: true }),
    new html({
      template: "./index.html",
      inject: "body"
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.[chunkhash].js",
      minChunks: function(module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime"
    })
  ]
};
