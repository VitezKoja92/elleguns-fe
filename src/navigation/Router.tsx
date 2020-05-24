import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Entrance from "../components/Pages/Entrance/Entrance";
import Dashboard from "../components/Pages/Dashboard/Dashboard";

function Router() {
  // const { isAuthenticated } = useContext(NetworkContext)
  // const { path } = useContext(LocationContext)
  let defaultRoute = `/entrance`;

  return (
    <>
      {/* {isAuthenticated ? ( */}
      <Switch>
        <Route path="/entrance" component={Entrance} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/settings" exact component={Settings} /> */}
        <Redirect to={defaultRoute} />
      </Switch>
      {/* ) : (
        <Switch>
          <Route path="/privacy" component={Privacy} />
          <Route path="/imprint" component={Imprint} />
          <Route path="/signin" component={SignIn} />
          <Redirect to="/signin" />
        </Switch>
      )} */}
    </>
  );
}

export default Router;
