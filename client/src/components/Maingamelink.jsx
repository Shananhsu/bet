import React, { Component } from 'react';
import Broadcast from "./Broadcast"

class Maingamelink extends Component {
    // state = {  }
    render() {
        return (
            <React.Fragment>
                <Broadcast />
                <div className="container">
                    <div className="row">

                        <div id="sf-lobby-00001">
                            <a className="col-sm-3 col-xs-6 game" href="./games/blackjack/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/blackjack.jpg" />21點

                            </a>

                            <a className="col-sm-3 col-xs-6 game" href="./games/niuniu/public/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/niuniu.jpg" style={{ "max-height": "50%" }} />妞妞
                            </a>

                            <a className="col-sm-3 col-xs-6 game" href="./games/dragonshoot/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/dragondoor.png" />射龍門
                            </a>

                            <a className="col-sm-3 col-xs-6 game" href="./games/fish/fishShooter.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/fish.jpg" />捕魚遊戲
                            </a>

                            <a className="col-sm-3 col-xs-6 game" href="./games/tiger/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/tiger.jpg" />老虎機
                            </a>

                            <a className="col-sm-3 col-xs-6 game" href="./games/billiard/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/tableball.jpg" />桌球遊戲
                            </a>

                            <a className="col-sm-3 col-xs-6 game" href="./games/baccarat/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/baccarat.jpg" />百家樂
                            </a>

                            {/* <a className="col-sm-3 col-xs-6 game" href="./games/dicegame/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/dicegame.jpg" />骰子遊戲
                            </a> */}

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Maingamelink;