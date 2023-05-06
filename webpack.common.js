const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
//   mode: "production",
//   devServer: {
//     client: {
//       overlay: {
//         errors: true,
//         warnings: false,
//       },
//     },
//   },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      /* babel loader */
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     use: [
    //       {
    //         loader: "babel-loader",
    //         options: {
    //           presets: ["@babel/preset-env"],
    //         },
    //       },
    //     ],
    //   },
    ],
  },
  /* plugin */
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/templates/index.html"),
    }),
  ],
};
