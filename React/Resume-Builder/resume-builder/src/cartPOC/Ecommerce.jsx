import React from 'react';
import {Switch , Route , BrowserRouter as Router , Redirect} from "react-router-dom";

import HomePage from "./cartComponents/HomePage"
import ProductPage from "./cartComponents/ProductPage"

import CartPage from "./cartComponents/CartPage"

import NavBar from "./cartComponents/NavBar"


function Ecommerce() {

    return (
       <Router>
        <NavBar></NavBar>
        <Switch>
            <Route path="/product"  component={ProductPage}></Route>
            <Route path = "/cart" component={CartPage}></Route>
            <Route path = "/" component={HomePage}></Route>
            <Redirect to="/"></Redirect>
        </Switch>
       </Router>
    )
}

export default Ecommerce;