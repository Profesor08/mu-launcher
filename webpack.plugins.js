/* eslint-disable @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const production = process.argv.find((arg) => arg.startsWith("--role=prod"));

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, "src/renderer/", "assets"),
      to: path.resolve(__dirname, production ? ".webpack/renderer/main_window" : ".webpack/renderer", "assets"),
    },
  ]),
  new webpack.DefinePlugin({
    __REACT_DEVTOOLS_GLOBAL_HOOK__: "({ isDisabled: true })",
  }),
];
