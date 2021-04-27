import React, { Component } from 'react';
class Footer extends Component {
    // state = {  }
    render() {
        return (
            <React.Fragment>
                <div className="footer">

                    <div className="games">
                        <div className="container">
                            <img src="images/footer/games.png" alt="imgErr" />
                        </div>

                    </div>

                    <div className="footerBox">
                        <div className="container">
                            <div className="aboutBox">
                                <ul>
                                    <li>
                                        <h6>關於</h6>
                                    </li>
                                    <li>
                                        <a href="/about/us">關於我們</a>
                                    </li>
                                    <li>
                                        <a href="/about/policy">服務條款</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h6>開戶交易</h6>
                                    </li>
                                    <li>
                                        <a href="/cust/open">開戶流程</a>
                                    </li>
                                    <li>
                                        <a href="/cust/save">入金流程</a>
                                    </li>
                                    <li>
                                        <a href="/cust/withdraw">出金流程</a>
                                    </li>
                                    <li>
                                        <a href="./bonus.html">優惠中心</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h6>幫助與支持</h6>
                                    </li>
                                    <li>
                                        <a href="/about/policy">服務條款</a>
                                    </li>
                                    <li>
                                        <a href="/about/privacy">隱私政策</a>
                                    </li>
                                    <li>
                                        <a href="/about/privacy">存取款幫助</a>
                                    </li>
                                </ul>
                                <ul style={{"float": "left"}}>
                                    <li>
                                        <p>諾亞娛樂擁有歐洲馬耳他博彩管理局（MGA）和博彩委員會（PAGCOR）頒發的合法執照。</p>
                                    </li>
                                </ul>
                                <ul>

                                    <li>
                                        <p>註冊於英屬維爾京群島，是受國際博彩協會認可的合法博彩公司。進行註冊並娛樂前，請確保您年滿18周歲！</p>
                                    </li>
                                </ul>

                            </div>
                            <div className="copyright">
                                COPYRIGHT (©) 2020 諾亞娛樂版權所有，不得轉載。
        </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Footer;