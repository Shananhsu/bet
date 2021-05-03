import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GamePage from "./pages/GamePage";
import Bonus from "./pages/Bonus";
// 阿川寫的
import Account from "./pages/AccountSettingPage";



//函數型組件
var Router = () => (
    <BrowserRouter>
        <Switch>
            {/* 主頁 */}
            <Route path="/" exact render={(props) => <HomePage />} />
            {/* <Route path = "/" exact component={HomePage}  /> */}
            {/* 登入 */}
            <Route path="/login" render={(props) => <LoginPage />} />
            {/* <Route path = "/login" component={LoginPage}  /> */}
            {/* 註冊 */}
            <Route path="/register" component={RegisterPage} />
            {/* 遊戲頁面 */}
            <Route path="/gamelink" component={GamePage} />
            {/* 紅利頁面 */}
            <Route path="/bonus" component={Bonus} />

            {/* 阿川寫的 */}
            <Route path="/accountSetting" component={Account} />

            
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;