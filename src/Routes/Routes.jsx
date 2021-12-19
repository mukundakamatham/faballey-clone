import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import Wishlist from "../components/wishlist/Wishlist"
import Shipping from '../components/payments/ship';

 import Payment from '../components/payments/payment'
import { SigninPage } from "./Signinpage";
import { LoginPage } from "./LoginPage";
function Routes() {
  return (
    <>
      <div>
        <Link to="/">TASKS</Link>
        <Link to="/register">signIN</Link>
         <Link to="/login">LOGIN</Link>
         <Link to="/Shipping">Shipping</Link>
         <Link to="/Payment">Payment</Link>
         <Link to="/wishlist">wishlist</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/wishlist">
          <Wishlist /> 
        </Route>
        <Route path="/Payment">
          <Payment /> 
        </Route>
        <Route path="/Shipping">
          <Shipping /> 
        </Route>
        <Route path="/login">
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
