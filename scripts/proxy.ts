// 本地api服务代理
const proxySettings = {
  "/api": {
    target: "http://localhost:3000",
    changeOrigin: true,
  },
};

export default proxySettings;
