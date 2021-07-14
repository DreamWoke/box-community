import { join, resolve } from "path"
import webpack from "webpack"
import { PROJECT_PATH } from "../constants"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

const isProd = process.env.NODE_ENV === "production"
console.log(resolve(PROJECT_PATH, "./src/index.ts"))
const baseConfig: webpack.Configuration = {
  entry: {
    app: resolve(PROJECT_PATH, "./src/index.ts"),
  },
  output: {
    publicPath: "/",
    path: resolve(PROJECT_PATH, "./dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      "@": join(PROJECT_PATH, "./src"),
      Common: join(PROJECT_PATH, "./src/common"),
      Components: join(PROJECT_PATH, "./src/components"),
      Utils: join(PROJECT_PATH, "./src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: isProd ? MiniCssExtractPlugin.loader : "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024,
              name: "[name].[contenthash:8].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[contenthash:8].[ext]",
              outputPath: "assets/fonts",
            },
          },
        ],
      },
    ],
  },
}

export default baseConfig
