import webpack from "webpack";
const { merge } = require("webpack-merge");
import proxySetting from "../proxy";
import baseConfig from "./webpack.config.base";
import { SERVER_HOST, SERVER_PORT } from "../constants";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";

const devConfig: webpack.Configuration = merge(baseConfig, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: SERVER_PORT, // 指定端口，默认是8080
    clientLogLevel: "silent", // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: false, // 打开默认浏览器
    hot: true, // 热更新
    inline: true,
    historyApiFallback: true,
    proxy: { ...proxySetting },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        notes: [],
        messages: [`Your application is running here: http://${SERVER_HOST}:${SERVER_PORT}`],
      },
      clearConsole: true,
    }),
  ],
  stats: "errors-only",
});

export default devConfig;
