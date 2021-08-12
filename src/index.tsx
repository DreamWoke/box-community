import React from "react";
import ReactDOM from "react-dom";
import store from "@/redux";
import { Provider } from "react-redux";
import Router from "@/routers";
import Title from "./components/Title";
import "./style/basic.less";
function App() {
  return (
    <Provider store={store}>
      <Title />
      <Router />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
