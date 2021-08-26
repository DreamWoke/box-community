import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import store from "@/redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "@/routers";
import Login from "@/page/login";
import Title from "./components/Title";
import "./style/basic.less";
import Cookies from "js-cookie";
import loginSlice from "./redux/reducers/login";
function App() {
  useEffect(() => {
    if (Cookies.get("token")) {
      store.dispatch(loginSlice.actions.updateState({ token: Cookies.get("token") }));
    }
  }, []);
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
