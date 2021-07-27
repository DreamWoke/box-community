import MainPage from "@/page/main"
import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect, RouteComponentProps } from "react-router-dom"
const Main = React.lazy(() => import(/* webpackChunkName: "Main" */ "@/page/main"))

const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div />}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/main" />} />
            <Route exact path="/main" component={MainPage} />
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default Routes
