import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

import Login from "./containers/Login"
import Entry from "./containers/Entry"
import Code from "./containers/Code"

const PrivateRoutes = () => (
  <>
    <Route path="/entry" component={Entry} />
    <Route path="/code" component={Code} />
  </>
)

const Routes = () => {
  const user = useSelector(({ user: { data } }) => data)

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login" component={Login} />
      {user ? <PrivateRoutes /> : <Redirect to="/" />}
    </Switch>
  )
}

export default Routes
