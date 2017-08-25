const webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
