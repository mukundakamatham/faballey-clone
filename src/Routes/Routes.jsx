import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import Wishlist from "../components/wishlist/Wishlist"
import Shipping from '../components/payments/ship';

import Payment from '../components/payments/payment'
import { SigninPage } from "./Signinpage";
import { LoginPage } from "./LoginPage";
import {ProductList} from "../components/ProductList/ProductList";
import Footer from '../components/footer/footer';
import {BothNavbar} from "../Navbars/Bothnavbar"
import {Products} from "../components/Product/products"
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
         <Link to='/productses'>ListOf</Link>


      </div>
      <BothNavbar/>

      <Switch>
        <Route exact path="/">
          <Home />
          </Route>
          <Route path='/productss/:id'>
          <ProductList/>
        </Route>
        
        
        <Route path="/products">
          <Products /> 
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
      <Footer/>
    </>
  );
}

export { Routes };
