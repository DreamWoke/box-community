import path from "path";

export const SERVER_HOST = "localhost";
export const SERVER_PORT = 5000;
export const PROJECT_PATH = path.resolve(__dirname, "../");
export const STYLE_PATH = path.resolve(__dirname, "../src/style");
export const ANTD_PATH = path.resolve(__dirname, "../node_modules/antd");
export const CONFIG_MAP = {
  developmentConfig: {
    PROJECT_NAME: "box-community-dev",
    PUBLIC_PATH: "/",
    Domain: "http://localhost:3000",
  },
  productionConfig: {
    PROJECT_NAME: "box-community",
    PUBLIC_PATH: "https://box-community-1300990907.file.myqcloud.com/",
    Domain: "http://121.4.83.203",
  },
};
