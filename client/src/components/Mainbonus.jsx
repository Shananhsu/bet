import React, { Component } from 'react';
import $ from "jquery";
class Mainbonus extends Component {

    componentDidMount() {
        $('.title').click(function () {

            if ($('video').length) {
                $('video')[0].pause();
            }

            if ($(this).next().css('display') == 'none') {
                $('#promotions .content').hide();
                $(this).next().slideToggle();
                if ($(this).next().children('video').length) {
                    $(this).next().children('video')[0].play();
                }
            } else {
                $('#promotions .content').hide();
            }
        });
    };
    render() {

        return (
            <React.Fragment>
                <div id="container" className="container promotionContainer">
                    <div id="promotions" className="row">
                        <div className='title col-sm-12'>
                            <img src='images/bonus/promotion-1.png' />
                        </div>
                        <div className='content col-sm-12'>
                            <img src='images/bonus/promotion-1.jpg' />
                        </div>

                        <div className='title col-sm-12'>
                            <img src='images/bonus/promotion-3.png' />
                        </div>
                        <div className='content col-sm-12'>
                            <img src='images/bonus/promotion-3.jpg' />
                        </div>

                        <div className='title col-sm-12'>
                            <img src='images/bonus/promotion-6.png' />
                        </div>
                        <div className='content col-sm-12'>
                            <img src='images/bonus/promotion-6.jpg' />
                        </div>

                        <div className='title col-sm-12'>
                            <img src='images/bonus/promotion-9.png' />
                        </div>
                        <div className='content col-sm-12'>
                            <img src='images/bonus/promotion-9.jpg' />
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
    }
}

export default Mainbonus;