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
                                        <h6>遊戲大廳</h6>
                                        {/* <a href="http://localhost:3000/gamelink"><h6>遊戲大廳</h6></a> */}
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/gamelink" target="_blank">遊戲大廳入口</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/games/blackjack/index.html" target="_blank">21點</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/games/niuniu/public/index.html" target="_blank">妞妞</a>
                                    </li>
                                    <li>
                                        <a href="hhttp://localhost:3000/games/dragonshoot/index.html" target="_blank">設龍門</a>
                                    </li>


                                </ul>
                                <ul>
                                    <li>
                                        <h6><br /></h6>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/games/fish/fishShooter.html" target="_blank">捕魚機</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/games/tiger/index.html" target="_blank">拉霸</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/games/billiard/index.html" target="_blank">撞球</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/games/baccarat/index.html" target="_blank">百家樂</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h6>會員中心</h6>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/login?">登入</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/register">註冊</a>
                                    </li>                                
                                </ul>
                          
                                <ul style={{ "float": "left" }}>
                                    <li>
                                        <p>OMOG擁有南極洲冰河博彩管理局（SGA）和博彩委員會（SPAGCOR）頒發的合法執照。</p>
                                    </li>
                                </ul>
                                <ul>

                                    <li>
                                        <p>註冊於南極洲屬冰河群島，是受國際博彩協會認可的合法博彩公司。進行註冊並娛樂前，請確保您年滿18周歲！</p>
                                    </li>
                                </ul>

                            </div>
                            <div className="copyright">
                                COPYRIGHT (©) 2021 OMOG娛樂版權所有，不得轉載。
        </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Footer;