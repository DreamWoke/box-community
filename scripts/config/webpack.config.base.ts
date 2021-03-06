import fs from "fs";
import webpack from "webpack";
import path, { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
// const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
// const { getLessVars } = require("antd-theme-generator");
import { CONFIG_MAP, PROJECT_PATH, STYLE_PATH, ANTD_PATH } from "../constants";

const isProd = process.env.NODE_ENV === "production";

const { productionConfig, developmentConfig } = CONFIG_MAP;
const { PUBLIC_PATH, PROJECT_NAME } = isProd ? productionConfig : developmentConfig;

// const themeVariables = getLessVars(resolve(STYLE_PATH, "./basic.less"));
// const antDarkVars = getLessVars(resolve(ANTD_PATH, "./lib/style/themes/dark.less"));
// const myDarkVars = getLessVars(resolve(STYLE_PATH, "./theme/dark.less"));
// const antLightVars = getLessVars(resolve(ANTD_PATH, "./lib/style/themes/compact.less"));
// const myLightVars = getLessVars(resolve(STYLE_PATH, "./theme/compact.less"));

// fs.writeFileSync(resolve(STYLE_PATH, "./theme_Json/dark.json"), JSON.stringify({ ...antDarkVars, ...myDarkVars }));
// fs.writeFileSync(resolve(STYLE_PATH, "./theme_Json/light.json"), JSON.stringify({ ...antLightVars, ...myLightVars }));
// fs.writeFileSync(resolve(STYLE_PATH, "./theme_Json/theme.json"), JSON.stringify(themeVariables));

// const options = {
//   stylesDir: STYLE_PATH,
//   antDir: ANTD_PATH,
//   publicPath: isProd ? PUBLIC_PATH : "",
//   varFile: resolve(STYLE_PATH, "./basic.less"),
//   themeVariables: Array.from(
//     new Set([
//       ...Object.keys({ ...antDarkVars, ...myDarkVars }),
//       ...Object.keys({ ...antLightVars, ...myLightVars }),
//       ...Object.keys(themeVariables),
//     ])
//   ),
//   generateOnce: false,
// };

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
        test: /\.(css|less)$/,
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
      //ts????????????????????????
      typescript: {
        configFile: resolve(PROJECT_PATH, "./tsconfig.json"),
      },
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[name].[contenthash:8].css",
      ignoreOrder: false,
    }),
    // new AntDesignThemePlugin(options),
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
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
      ENV_CONFIG: isProd ? productionConfig : developmentConfig,
    }),
  ],
};

export default baseConfig;
