import React from "react";
import ReactDOM from "react-dom";
import store from "@/redux";
import { Provider } from "react-redux";
import Router from "@/routers";
import "./style/basic.scss";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
