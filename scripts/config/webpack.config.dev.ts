import webpack from "webpack"
const { merge } = require("webpack-merge")
import proxySetting from "../proxy"
import baseConfig from "./webpack.config.base"
import { SERVER_HOST, SERVER_PORT } from "../constants"

// const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")

const devConfig: webpack.Configuration = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: SERVER_PORT, // 指定端口，默认是8080
    clientLogLevel: "silent", // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    inline: true,
    historyApiFallback: true,
    proxy: { ...proxySetting },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new FriendlyErrorsWebpackPlugin({
    //   compilationSuccessInfo: {
    //     messages: [`Your application is running here: http://${SERVER_HOST}:${SERVER_PORT}`],
    //   },
    //   // 错误信息用ForkTsCheckerWebpackPlugin，暂时注释这边
    //   // onErrors: (severity, errors) => {
    //   //   if (severity !== "error") {
    //   //     return
    //   //   }
    //   //   const error = errors[0]
    //   //   notifier.notify({
    //   //     title: "Webpack error",
    //   //     message: severity + ": " + error.name,
    //   //     subtitle: error.file || "",
    //   //     // icon: ICON --address
    //   //   })
    //   // },
    //   clearConsole: true,
    // }),
  ],
  stats: "errors-only",
})

export default devConfig
