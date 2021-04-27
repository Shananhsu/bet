import React, { Component } from 'react';
import $ from 'jquery'
class Playground extends Component {

    handleClick=()=>{
        $(document).ready(function () {
            $('.tab-title li').on('click', function () {
                $(this).addClass(" ui-tabs-active ui-state-active").attr({ "tabIndex": 0, "aria-selected": "true", "aria-expanded": "true" });
                $('.tab-title li').not(this).removeClass(" ui-tabs-active ui-state-active").attr({ "tabIndex": -1, "aria-selected": "false", "aria-expanded": "false" });
                var thismodal = "#" + $(this).attr("aria-controls");
                $("div[aria-hidden='false']").attr("aria-hidden", "true").css("display", "none")
                $(thismodal).attr("aria-hidden", "false").css("display", "")
            })
        })

    }

    render() {
        return (
            <React.Fragment>
                <div id="tab-demo" className="ui-tabs ui-corner-all ui-widget ui-widget-content">
                    <div className="tab_left col-sm-3">
                        <ul className="tab-title ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
                            role="tablist">
                            <li role="tab" tabIndex="0" onMouseEnter={this.handleClick}
                                className="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active"
                                aria-controls="tab00" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true">
                                <a
                                    href="#tab00" role="presentation" tabIndex="-1" className="ui-tabs-anchor"
                                    id="ui-id-1"><span>真人一館</span></a></li>
                            <li role="tab" tabIndex="-1" onMouseEnter={this.handleClick} className="ui-tabs-tab ui-corner-top ui-state-default ui-tab"
                                aria-controls="tab01" aria-labelledby="ui-id-2" aria-selected="false" aria-expanded="false"><a
                                    href="#tab01" role="presentation" tabIndex="-1" className="ui-tabs-anchor" id="ui-id-2"
                                ><span>真人二館</span></a></li>
                            <li role="tab" tabIndex="-1" onMouseEnter={this.handleClick} className="ui-tabs-tab ui-corner-top ui-state-default ui-tab"
                                aria-controls="tab02" aria-labelledby="ui-id-3" aria-selected="false" aria-expanded="false">
                                <a
                                    href="#tab02" role="presentation" tabIndex="-1" className="ui-tabs-anchor" id="ui-id-3"
                                ><span>體育賽事</span></a></li>
                            <li role="tab" tabIndex="-1" onMouseEnter={this.handleClick} className="ui-tabs-tab ui-corner-top ui-state-default ui-tab"
                                aria-controls="tab03" aria-labelledby="ui-id-4" aria-selected="false" aria-expanded="false"><a
                                    href="#tab03" role="presentation" tabIndex="-1" className="ui-tabs-anchor" id="ui-id-4"
                                ><span>電競投注</span></a></li>
                            <li role="tab" tabIndex="-1" onMouseEnter={this.handleClick} className="ui-tabs-tab ui-corner-top ui-state-default ui-tab"
                                aria-controls="tab04" aria-labelledby="ui-id-5" aria-selected="false" aria-expanded="false"><a
                                    href="#tab04" role="presentation" tabIndex="-1" className="ui-tabs-anchor" id="ui-id-5"
                                ><span>棋牌遊戲</span></a></li>
                            <li role="tab" tabIndex="-1" onMouseEnter={this.handleClick} className="ui-tabs-tab ui-corner-top ui-state-default ui-tab"
                                aria-controls="tab05" aria-labelledby="ui-id-6" aria-selected="false" aria-expanded="false"><a
                                    href="#tab05" role="presentation" tabIndex="-1" className="ui-tabs-anchor"
                                    id="ui-id-6"><span>彩票賓果</span></a></li>
                            <li role="tab" tabIndex="-1" onMouseEnter={this.handleClick} className="ui-tabs-tab ui-corner-top ui-state-default ui-tab"
                                aria-controls="tab06" aria-labelledby="ui-id-7" aria-selected="false" aria-expanded="false"><a
                                    href="#tab06" role="presentation" tabIndex="-1" className="ui-tabs-anchor" id="ui-id-7"
                                ><span>電子一館</span></a></li>
                            <li role="tab" tabIndex="-1" onMouseEnter={this.handleClick} className="ui-tabs-tab ui-corner-top ui-state-default ui-tab "
                                aria-controls="tab07" aria-labelledby="ui-id-8" aria-selected="false" aria-expanded="false"><a
                                    href="#tab07" role="presentation" tabIndex="-1" className="ui-tabs-anchor" id="ui-id-8"
                                ><span>電子二館</span></a></li>
                        </ul>
                    </div>
                    <div className="tab_right col-sm-12">
                        <div id="tab00" className="tab-inner ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-1"
                            role="tabpanel" aria-hidden="false" >
                            <img src="/images/playground/tab00.png" alt="imgErr" />
                            <img src="/images/playground/tab00-sm.png" alt="imgErr" className="float" />
                            <img src="/images/playground/tab00-sm2.png" alt="imgErr" className="secondFloat" />
                            <ul>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">DG</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">亞博真人</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">歐博</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">WM</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="tab01" className="tab-inner ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-2"
                            role="tabpanel" aria-hidden="true" style={{ display: 'none' }}>
                            <img src="/images/playground/tab01.png" alt="imgErr" />
                            <img src="/images/playground/tab01-sm.png" alt="imgErr" className="float" />
                            <img src="/images/playground/tab01-sm2.png" alt="imgErr" className="secondFloat" />
                            <ul>

                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">SA</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">OG</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">億博</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="tab02" className="tab-inner ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-3"
                            role="tabpanel" aria-hidden="true" style={{ display: 'none' }}>
                            <img src="/images/playground/tab02.png" alt="imgErr" />
                            <img src="/images/playground/tab02-sm1.png" alt="imgErr" className="float" />
                            <img src="/images/playground/tab02-sm2.png" alt="imgErr" className="secondFloat" />
                            <ul>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">Super體育</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">AFB體育</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">體球王</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div id="tab03" className="tab-inner ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-4"
                            role="tabpanel" aria-hidden="true" style={{ display: 'none' }}>
                            <img src="/images/playground/tab03.png" alt="imgErr" />
                            <img src="/images/playground/tab03-sm1.png" alt="imgErr" className="float" />
                            <img src="/images/playground/tab03-sm2.png" alt="imgErr" className="secondFloat" />
                            <ul>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">泛亞電競</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div id="tab04" className="tab-inner ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-5"
                            role="tabpanel" aria-hidden="true" style={{ display: 'none' }}>
                            <img src="/images/playground/tab04.png" alt="imgErr" />
                            <img src="/images/playground/tab04-sm1.png" alt="imgErr" className="float" />
                            <img src="/images/playground/tab04-sm2.png" alt="imgErr" className="secondFloat" />
                            <ul>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">OGB</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">MG棋牌</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">VG</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="tab05" className="tab-inner ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-6"
                            role="tabpanel" aria-hidden="true" style={{ display: 'none' }}>
                            <img src="/images/playground/tab05.png" alt="imgErr" />
                            <img src="/images/playground/tab05-sm1.png" alt="imgErr" className="float" />
                            <img src="/images/playground/tab05-sm2.png" alt="imgErr" className="secondFloat" />
                            <ul>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">亞博彩票</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">LJ彩票</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">六合彩</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="tab06" className="tab-inner ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-7"
                            role="tabpanel" aria-hidden="true" style={{ display: 'none' }}>
                            <img src="/images/playground/tab06.png" alt="imgErr" />
                            <img src="/images/playground/tab06-sm1.png" alt="imgErr" className="float" />
                            <img src="/images/playground/tab06-sm2.png" alt="imgErr" className="secondFloat" />
                            <ul>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">QTech</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 game" href="/lobby/obgelec">
                                            <div className="gamesName">亞博電子</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 game" href="/lobby/ameba">
                                            <div className="gamesName">AMEBA</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 game" href="/lobby/bewin">
                                            <div className="gamesName">必贏電子</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 game" href="/lobby/rtg">
                                            <div className="gamesName">RTG</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="tab07" className="tab-inner ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-8"
                            role="tabpanel" aria-hidden="true" style={{ display: 'none' }}>
                            <img src="/images/playground/tab07.png" alt="imgErr" />
                            <img src="/images/playground/tab07-sm1.png" alt="imgErr" className="float" />
                            <ul>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal"
                                        >
                                            <div className="gamesName">BetSoft</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">亞博捕魚</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 modal_btn game" data-toggle="modal" data-text="/login" href="#modal">
                                            <div className="gamesName">微笑捕魚</div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gamesBg">
                                        <a className="col-xs-3 game" href="/lobby/aigaming">
                                            <div className="gamesName">Aigaming</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Playground;