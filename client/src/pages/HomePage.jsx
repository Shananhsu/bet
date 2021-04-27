import React, { Component } from 'react';
import HomePageCursor from "../components/HomePageCursor"
import Header from "../components/Header";
import Footer from "../components/Footer"
import Playground from "../components/Playground"

class HomePage extends Component {

    // state = {  }
    render() {
        return (
            
            <React.Fragment>
                
                <Header />
                 {/* 旋轉木馬 */}
                <HomePageCursor />
                {/* 遊戲元件展示 */}
                <Playground />
                <Footer />
            </React.Fragment>




        );
    }
}

export default HomePage;