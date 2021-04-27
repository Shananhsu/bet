import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer"
import Maingamelink from "../components/Maingamelink"

class HomePage extends Component {

    // state = {  }
    render() {
        return (
            <React.Fragment>
                <Header />
                <Maingamelink />
                <Footer />
            </React.Fragment>

        );
    }
}

export default HomePage;