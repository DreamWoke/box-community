import React from "react";
import ReactDOM from "react-dom";
import store from "@/redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "@/routers";
import Login from "@/page/login";
import Title from "./components/Title";
import "./style/basic.less";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Title />
        <Router />
        <Login />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
