import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer"
import RegisterForm from "../components/RegisterForm"


class RegisterPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header />
    
                <RegisterForm />
                <Footer />
            </React.Fragment>
        );
    }
}

export default RegisterPage;