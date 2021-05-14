import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer"
import RegisterForm from "../components/RegisterForm"


// class RegisterPage extends Component {
const RegisterPage =(props) => {
    // state = {}
    // render() {
        return (
            <React.Fragment>
                <Header />
    
                <RegisterForm props={props}/>
                <Footer />
            </React.Fragment>
        );
    }
// }

export default RegisterPage;