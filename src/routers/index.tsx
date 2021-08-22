import React, { Suspense } from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
const Main = React.lazy(() => import(/* webpackChunkName: "Main" */ "@/page/main"));
const Edit = React.lazy(() => import(/* webpackChunkName: "Edit" */ "@/page/edit"));

const Routes: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/main" />} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/edit" component={Edit} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Routes;
