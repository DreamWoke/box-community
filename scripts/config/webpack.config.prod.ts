const { merge } = require("webpack-merge");
import baseConfig from "./webpack.config.base";
import { PROJECT_PATH } from "../constants";
import CopyPlugin from "copy-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import webpack from "webpack";
import { resolve } from "path";
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const prodConfig: webpack.Configuration = merge(baseConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       context: resolve(PROJECT_PATH, "./public"),
    //       from: "assets",
    //       to: resolve(PROJECT_PATH, "./dist/assets"),
    //       toType: "dir",
    //     },
    //   ],
    // }),
    //打包分析报告
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "server", // 开一个本地服务查看报告
    //   analyzerHost: "127.0.0.1", // host 设置
    //   analyzerPort: 8888, // 端口号设置
    // }),
  ],
});

export default prodConfig;
