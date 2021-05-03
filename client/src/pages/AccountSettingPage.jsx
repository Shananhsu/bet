// 這是阿川寫的

import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer"
import AccountSetting from "../components/AccountSetting"





class AccountSettingPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header />
                
                <AccountSetting/>
                
                <Footer />
            </React.Fragment>
        );
    }
}

export default AccountSettingPage;