const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Chart JS",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' })
  ],
  experiments:{
    topLevelAwait: true,
  }
};
