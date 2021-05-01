import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Point from './Point';
import Withdraw from './Withdraw';
import Verifyphotoinfo from './Verifyphotoinfo';
import Querybetlog from './Querybetlog';
import Tradepoint from './Tradepoint';
import Profitloss from './Profitloss';
import { render } from "react-dom";

const Memberbanner = (props) => {
    // class Memberbanner extends Component {
    // <script type="text/javascript">
    // $(document).ready(function (e) {
    //     $('#sf-balance-00001 .balance').click(function () {
    //         var self = $(this);
    //         self.empty().append("<img src='/images/ajax-loader.gif' />");
    //         $.get('/GameAutoTransferWithdraw', function (e) { self.html(e); });
    //     });
    //                     });
    //                 </script>
    console.log(props)
    return (
        <React.Fragment>
            <div className="container" id="container">
                <div id="sf-membercenter-frame-00001">
                    <div className="row">
                        <div className="col-sm-12 title">
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                            <h3>會員中心MEMBER CENTER</h3>
                        </div>
                    </div>

                    <div className="row content">
                        <div className="banner">
                            <h2 className="name">{props.props.account}</h2>
                            
                            <b className="getbalance">主帳戶:

                                <div id="sf-balance-00001">
                                    <span className="glyphicon glyphicon-usd"></span>
                                    <b className="balance">查詢</b>
                                </div>
                            </b>
                        </div>
                        <div className="portrait">
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        {/* left banner */}
                        <div className="main">
                            <div className="col-sm-2 membernav">
                                <ul className="list-group">
                                    <li className="list-group-item ">
                                        <a href="/trademoney/saving">
                                            <span className="icon glyphicon glyphicon-usd"></span>
                                            <span className="text">儲值點數</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item ">
                                        <a href="/point">
                                            <span className="icon glyphicon glyphicon-transfer"></span>
                                            <span className="text">點數轉移</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item ">
                                        <a href="/trademoney/withdraw">
                                            <span className="icon fa fa-money" aria-hidden="true"></span>
                                            <span className="text">點數提領</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item ">
                                        <a href="/querybetlog">
                                            <i className="icon fa fa-futbol-o" aria-hidden="true"></i>
                                            <span className="text">投注資料</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item ">
                                        <a href="/profitloss">
                                            <span className="icon fa fa-bar-chart" aria-hidden="true"></span>
                                            <span className="text">遊戲盈虧</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item ">
                                        <a href="/tradepoint">
                                            <span className="icon glyphicon glyphicon-asterisk"></span>
                                            <span className="text">點數紀錄</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item ">
                                        <a href="/memberinfo">
                                            <i className="icon glyphicon glyphicon-cog"></i>
                                            <span className="text">帳戶設定</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item  on ">
                                        <a href="/verifyphotoinfo">
                                            <i className="icon glyphicon glyphicon-picture"></i>
                                            <span className="text">驗證照上傳</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* main content */}
                            {/* <BrowserRouter> */}
                            {/* <Switch> */}
                            {/* <Route path="/verifyphotoinfo" component={Verifyphotoinfo} exact /> */}
                            {/* <Route path="/point" component={Point} /> */}
                            {/* <Route path="/trademoney/withdraw" component={Withdraw}/> */}
                            {/* <Route path="/querybetlog" component={Querybetlog}/> */}
                            {/* <Route path="/tradepoint" component={Tradepoint}/> */}
                            {/* <Route path="/profitloss"component={Profitloss}/> */}
                            {/* <Route component={Error} /> */}
                            {/* </Switch> */}
                            {/* </BrowserRouter> */}
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    )
}


// const _div = document.createElement('div');
// document.body.appendChild(_div);

// const _Memberbanner = render(<Memberbanner />, _div);
// console.log(_Memberbanner);
// export default _Memberbanner;
export default Memberbanner;
