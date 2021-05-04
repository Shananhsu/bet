import React, { Component,useState,useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Point from './Point';
import Withdraw from './Withdraw';
import Verifyphotoinfo from './Verifyphotoinfo';
import Querybetlog from './Querybetlog';
import Tradepoint from './Tradepoint';
import Profitloss from './Profitloss';
import { render } from "react-dom";
import $ from "jquery";
import { MyContext } from '../../commons/context-manager';
import AccountSetting from './AccountSetting';


const Memberbanner = (props) => {
   
    // const pieChart = () => {
    //     $('#sf-balance-00001 .balance').click(function () {
    //         var self = $(this);
    //         self.empty().append("<img src='/images/ajax-loader.gif' />");
    //         $.get('/GameAutoTransferWithdraw', function (e) { self.html(e); });
    //     });
    // }
    
    const [total_balance, setTotal_balance] = useState(0);
    

    const clickComponent = () => {
        $('.modalUseing').on('click', function () {
            var usemodal = "#" + $(this).attr("aria-controls");
            $(usemodal).css("display", "")
            $('.modalUseing').not(this).each(function (idx, val) {
                const notUseModal = "#" + $(val).attr("aria-controls");
                $(notUseModal).css("display", "none")
            })


        })

    }

    // console.log(props)
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
                            {console.log(props.props)}
                            {/* <b className="getbalance">主帳戶餘額: {props.props.balance} */}
                            <b className="getbalance">總共餘額: {total_balance}

                                {/* <div id="sf-balance-00001">
                                    <span className="glyphicon glyphicon-usd"></span>
                                    <b className="balance">查詢</b>
                                </div> */}
                            </b>
                        </div>
                        <div className="portrait">
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        {/* left banner */}
                        <div className="main">
                            <div className="col-sm-2 membernav">
                                <ul className="list-group">
                                    <li className="list-group-item modalUseing" aria-controls="saving" onClick={clickComponent}>
                                        {/* <a href="/trademoney/saving"> */}
                                        <a >
                                            <span className="icon glyphicon glyphicon-usd"></span>
                                            <span className="text">儲值點數</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item modalUseing" aria-controls="sf-membercenter-point-getbalance-00002" onClick={clickComponent}>
                                        {/* <a href="/point"> */}
                                        <a >
                                            <span className="icon glyphicon glyphicon-transfer"></span>
                                            <span className="text">點數轉移</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item modalUseing" aria-controls="sf-membercenter-withdraw-00002" onClick={clickComponent}>
                                        {/* <a href="/trademoney/withdraw"> */}
                                        <a >
                                            <span className="icon fa fa-money" aria-hidden="true"></span>
                                            <span className="text">點數提領</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item modalUseing" aria-controls="sf-membercenter-querybetlog-00002" onClick={clickComponent}>
                                        {/* <a href="/querybetlog"> */}
                                        <a >
                                            <i className="icon fa fa-futbol-o" aria-hidden="true"></i>
                                            <span className="text">投注資料</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item modalUseing" aria-controls="sf-membercenter-profitloss-00002" onClick={clickComponent}>
                                        {/* <a href="/profitloss"> */}
                                        <a >
                                            <span className="icon fa fa-bar-chart" aria-hidden="true"></span>
                                            <span className="text">遊戲盈虧</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item modalUseing" aria-controls="sf-membercenter-tradepoint-00002" onClick={clickComponent}>
                                        {/* <a href="/tradepoint"> */}
                                        <a >
                                            <span className="icon glyphicon glyphicon-asterisk"></span>
                                            <span className="text">點數紀錄</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item modalUseing" aria-controls="sf-membercenter-memberinfo-00002" onClick={clickComponent}>
                                        {/* <a href="/memberinfo"> */}
                                        <a>
                                            <i className="icon glyphicon glyphicon-cog"></i>
                                            <span className="text">帳戶設定</span>
                                        </a>
                                    </li>
                                    <li className="list-group-item modalUseing" aria-controls='sf-membercenter-verifyphotoinfo-00002' onClick={clickComponent}>
                                        {/* <a href="/verifyphotoinfo"> */}
                                        <a >
                                            <i className="icon glyphicon glyphicon-picture"></i>
                                            <span className="text">驗證照上傳</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* modal 畫面顯示 */}
                            <div class="col-sm-10 membercontent" >
                                <MyContext.Provider value={{ setTotal_balance }}>
                                    {/* <Child step={step} number={number} count={count} /> */}
                                    {console.log(total_balance)}
                                    <Point account={props.props.account} balance={props.props.balance} total_balance={total_balance}/>
                                    <Profitloss />
                                    <Querybetlog />
                                    <Tradepoint />
                                    <Verifyphotoinfo />
                                    <AccountSetting />
                                    <Withdraw />
                                </MyContext.Provider>
                            </div>
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
