module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: "node-loader",
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: "@marshallofsound/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    loader: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  {
    test: /\.(ogg|mp3|wav|mpe?g)$/i,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: "file-loader",
      options: {
        name: "[path][name].[ext]",
      },
    },
  },
];
