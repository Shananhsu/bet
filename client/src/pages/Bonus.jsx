import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer"
import Mainbonus from "../components/Mainbonus"

class HomePage extends Component {

    // state = {  }
    render() {
        return (
            
            <React.Fragment>
                
                <Header />
                <Mainbonus />
                <Footer />
            </React.Fragment>




        );
    }
}

export default HomePage;