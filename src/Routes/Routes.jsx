import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Home } from "./Home";

import { SigninPage } from "./Signinpage";
import { LoginPage } from "./LoginPage";
function Routes() {
  return (
    <>
      <div>
        <Link to="/">TASKS</Link>
        <Link to="/register">signIN</Link>
         <Link to="/login1">LOGIN1</Link>
        
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/login1">
          <LoginPage /> 
        </Route>
        <Route path="/register">
          <SigninPage /> 
        </Route>
        <Route>
          <h3>Error</h3>
        </Route>
      </Switch>
    </>
  );
}

export { Routes };
