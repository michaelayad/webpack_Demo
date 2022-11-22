const pathModule = require("path");
const HTMLWebPack = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const cssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "boundle.js",
    path: pathModule.resolve(__dirname, "build"),
    assetModuleFilename: "assets/[name][ext]",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new cssMinimizerPlugin()],
  },
  plugins: [
    new HTMLWebPack({ template: "./src/index.html" }),
    new miniCssExtractPlugin({ filename: "style.min.css" }),
    new cssMinimizerPlugin(),
  ],
};
