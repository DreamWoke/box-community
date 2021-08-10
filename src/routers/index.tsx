import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import Title from "@/components/Title";
const Main = React.lazy(() => import(/* webpackChunkName: "Main" */ "@/page/main"));
const Edit = React.lazy(() => import(/* webpackChunkName: "Edit" */ "@/page/edit"));

const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div />}>
          <Title />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/main" />} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/edit" component={Edit} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default Routes;
