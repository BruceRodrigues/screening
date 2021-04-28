const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const public = path.resolve(__dirname, "public");
const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

module.exports = {
  entry: [src + "/index.js"],
  output: {
    path: dist,
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|jpg|svg|gif)?$/,
        use: "file-loader",
        exclude: /\.module\.(png|jpg|svg|gif)$/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: public,
          to: "assets",
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: "Basic react scaffold",
      template: public + "/index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    modules: [src, "node_modules"],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": src,
    },
  },
};
