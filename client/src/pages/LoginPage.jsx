import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer"
import LoginMain from "../components/LoginMain"

class LoginPage extends Component {
    state = {  }
    render() { 
        return ( 

            <React.Fragment>
                <Header />
                
                <LoginMain />
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default LoginPage;