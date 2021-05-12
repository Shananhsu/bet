import React, { Component } from 'react';
import $ from 'jquery';

class Mainnav extends Component {

    handleHover = (e) => {
        $(document).ready(function(e) {
            $(document).delegate('.navigation li, .nav-down-menu', 'touchstart click mouseenter', function(e) {
                var n = $(this).index() + 1;
                $('.nav-down-menu:nth-child(' + n + ')').stop().animate({
                    height: 267
                }, 300);
            });

            $('.navigation li, .nav-down-menu').on('touchstart click mouseleave', function() {
                $('.nav-down-menu').stop().animate({
                    height: 0
                }, 300);
            });
        });
    }


    render() {
        return (
            <React.Fragment>
                <div className="auto_left">
                    <div className="navBox navigation collapse navbar-collapse">
                        <ul className="nav navStyle">
                            <li>
                                <a className="on" href="/">首頁</a>
                            </li>
                            <li>
                                <a className="game" href="/gamelink" onMouseEnter={this.handleHover} > 真人一館</a>
                            </li>
{/* 
                            <li>
                                <a className="game" href="/" onMouseEnter={this.handleHover} >體育賽事</a>
                            </li> */}

                            <li>
                                <a className="game" href="/bonus">優惠活動</a>
                            </li>
                            <li>
                                <a className="game linePicture" target="game" href="">
                                    <img src="images/logo/line.png" alt="imgErr"
                                        style={{ 'width': '30px', 'marginTop': '-3px' }}
                                    />

                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="navigation-down">
                        <div></div>
                        <div className="nav-down-menu" style={{ 'height': '0px' }}>
                            <ul>
                                <li>
                                    <img src="images/navBarImg/live/live.png" alt="imgErr"/>
                                </li>
                                <li>
                                    <a className="modal_btn game allbet" data-toggle="modal" data-text="/login" href="#modal">

                                    </a>
                                </li>
                                <li>
                                    <a className="modal_btn game dg" data-toggle="modal" data-text="/login" href="#modal">

                                    </a>
                                </li>
                                <li>
                                    <a className="modal_btn game sa" data-toggle="modal" data-text="/login" href="#modal">

                                    </a>
                                </li>

                                <li>
                                    <a className="modal_btn game wm" data-toggle="modal" data-text="/login" href="#modal">

                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="nav-down-menu" style={{"height": "0px"}}>
                            <ul>
                                <li>
                                    <img src="images/navBarImg/Sport/sports.png" alt="imgErr"/>
                                </li>
                                <li>
                                    <a className="modal_btn game super" data-toggle="modal" data-text="/login" href="#modal">

                                    </a>
                                </li>
                                <li>

                                    <a className="modal_btn game afb" data-toggle="modal" data-text="/login" href="#modal"></a>
                                </li>
                                <li>
                                    <a className="modal_btn game tcw" data-toggle="modal" data-text="/login" href="#modal">

                                    </a>
                                </li>

                                <li>

                                    <a className="modal_btn game fightchicken" data-toggle="modal" data-text="/login"
                                        href="#modal"></a>
                                </li>
                            </ul>
                        </div>
               
                    </div>
                */}
                </div>

            </React.Fragment >

        );
    }
}

export default Mainnav;