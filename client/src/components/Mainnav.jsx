import React, { Component } from 'react';
import $ from 'jquery';

class Mainnav extends Component {

    // handleHover = (e) => {
    //     $(document).ready(function(e) {
    //         $(document).delegate('.navigation li, .nav-down-menu', 'touchstart click mouseenter', function(e) {
    //             var n = $(this).index() + 1;
    //             $('.nav-down-menu:nth-child(' + n + ')').stop().animate({
    //                 height: 267
    //             }, 300);
    //         });

    //         $('.navigation li, .nav-down-menu').on('touchstart click mouseleave', function() {
    //             $('.nav-down-menu').stop().animate({
    //                 height: 0
    //             }, 300);
    //         });
    //     });
    // }
    css={
        color:"#4176f8"
    }


    render() {
        return (
            <React.Fragment>
                <div className="auto_left">
                    <div className="navBox navigation collapse navbar-collapse">
                        <ul className="nav navStyle">
                            <p></p>
                            <li>
                                <a style={this.css} className="on" href="/">首頁</a>
                            </li>
                            <li>
                                {/* 因為跳出來的連結都用不到，所以我就把onMouseEnter拿掉了，這樣就不會顯示出來
                                若要改回來，把下面這行刪掉，下下面那行註解和上上上面的handleHover取消就好了 by阿川*/}
                                <a style={this.css} className="game" href="/gamelink" > 遊戲大廳</a>
                                {/* <a className="game" href="/gamelink" onMouseEnter={this.handleHover} > 真人一館</a> */}
                            </li>
                                <p></p>
{/* 
                            <li>
                                <a className="game" href="/" onMouseEnter={this.handleHover} >體育賽事</a>
                            </li> */}

{/* 這兩個按鈕用不到，所以我註解掉了 by阿川 */}
                            {/* <li>
                                <a className="game" href="/bonus">優惠活動</a>
                            </li>
                            <li>
                                <a className="game linePicture" target="game" href="">
                                    <img src="images/logo/line.png" alt="imgErr"
                                        style={{ 'width': '30px', 'marginTop': '-3px' }}
                                    />

                                </a>
                            </li> */}
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