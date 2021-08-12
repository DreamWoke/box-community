import fs from "fs";
import webpack from "webpack";
import path, { resolve } from "path";
import { PUBLIC_PATH, PROJECT_NAME, PROJECT_PATH } from "../constants";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const { getLessVars } = require("antd-theme-generator");
// style-path
const themePath = path.join(__dirname, "../../src/style");

const themeVariables = getLessVars(path.join(themePath, "basic.less"));
console.log(path.join(themePath, "basic.less"));
const darkVars = getLessVars(path.join(themePath, "theme/dark.less"));
const lightVars = getLessVars(path.join(themePath, "theme/compact.less"));
fs.writeFileSync(path.join(themePath, "dark.json"), JSON.stringify(darkVars));
fs.writeFileSync(path.join(themePath, "light.json"), JSON.stringify(lightVars));
fs.writeFileSync(path.join(themePath, "theme.json"), JSON.stringify(themeVariables));

const options = {
  stylesDir: themePath,
  antDir: path.join(__dirname, "../../node_modules/antd"),
  varFile: path.join(themePath, "basic.less"),
  themeVariables: Array.from(
    new Set([...Object.keys(darkVars), ...Object.keys(lightVars), ...Object.keys(themeVariables)])
  ),
  generateOnce: false,
};

const isProd = process.env.NODE_ENV === "production";

const baseConfig: webpack.Configuration = {
  entry: {
    app: resolve(PROJECT_PATH, "./src/index.tsx"),
  },
  output: {
    publicPath: PUBLIC_PATH,
    path: resolve(PROJECT_PATH, "./dist"),
    filename: `static/js/[name].${isProd ? "[hash:8]" : ""}.js`,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      "@": resolve(PROJECT_PATH, "./src"),
      Common: resolve(PROJECT_PATH, "./src/common"),
      Components: resolve(PROJECT_PATH, "./src/components"),
      Utils: resolve(PROJECT_PATH, "./src/utils"),
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
        test: /\.less$/,
        use: [
          { loader: isProd ? MiniCssExtractPlugin.loader : "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
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
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      //ts错误显示在终端中
      typescript: {
        configFile: resolve(PROJECT_PATH, "./tsconfig.json"),
      },
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[name].[contenthash:8].css",
      ignoreOrder: false,
    }),
    new AntDesignThemePlugin(options),
    new HtmlWebpackPlugin({
      title: PROJECT_NAME,
      template: resolve(PROJECT_PATH, "./public/index.html"),
      filename: "index.html",
      publicPath: PUBLIC_PATH,
      cache: false,
      minify: isProd
        ? {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            useShortDoctype: true,
          }
        : false,
    }),
  ],
};

export default baseConfig;
