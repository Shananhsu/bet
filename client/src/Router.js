import React, { Component } from 'react';
import {BrowserRouter,Switch ,Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

//函數型組件
var Router = () => (
    <BrowserRouter>
        <Switch>
            
            <Route path = "/" exact render={(props) =><HomePage />}  />
            {/* <Route path = "/" exact component={HomePage}  /> */}
            <Route path = "/login" render={(props) => <LoginPage />}  />
            {/* <Route path = "/login" component={LoginPage}  /> */}
            <Route path = "/register" component={RegisterPage}  />

            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;