import React, { Component } from 'react';
import Broadcast from "./Broadcast"

class Maingamelink extends Component {
    constructor(){
        super();
        this.game00={
            title:"",
            subTitle:"",
            desc:""
        }

        this.game01={
            title:"21點",
            subTitle:"簡介與規則",
            desc:`玩家與莊家比較牌型大小定勝負
點數高者獲勝，但點數必須小於或等於21點，大於21點稱爆牌
點數相同和局
玩家如兩張牌點數合起來21點直接獲勝，並贏取2倍下注籌碼
其他情況只能贏取或賠損1倍下注籌碼
點數計算如下：
    ・Ace可當1點或11點使用
    ・2-10只當該牌點數使用
    ・J Q K 則當10點使用
            `
        }
        this.game02={
            title:"妞妞",
            subTitle:"簡介與規則",
            desc:`玩家與莊家比較牌型大小定勝負。
五張撲克牌分前兩張、後三張，後三張湊成十的倍數成為第一個「妞」，前兩張相加的個位數拿來跟莊家比大小，若相加後超過八，且贏過別人，賭金乘以2倍，相加等於十的倍數成為第二個「妞」，就可以乘上3倍，若手上五張牌都是J、Q、K，則是5倍賭金。
            `
        }
        this.game03={
            title:"射龍門",
            subTitle:"簡介與規則",
            desc:`莊家首先開出兩張撲克牌，玩家投注過後，翻開第三張牌，若是第三張牌的點數介於莊家開出的兩張牌中間,玩家就獲得勝利。
如果玩家的第三張牌等於或是不介於莊家開出的牌，玩家就輸了這一局`
        }
        this.game04={
            title:"捕魚機",
            subTitle:"簡介與規則",
            desc:`努力擊殺魚隻即可，會根據擊殺魚的種類不同而獲得不同的獎勵，同時也可以自己選擇所要使用的砲彈類型，砲彈所消耗的金錢也會根據砲彈類型而改變，一起成為捕魚達人吧!
            `
        }
        this.game05={
            title:"拉霸",
            subTitle:"簡介與規則",
            desc:`總共有50條得分判定線，每條連線至少3項同樣圖案才可獲得獎金，而不同圖案之連線會有不同的彩金倍率。`
        }
        this.game06={
            title:"撞球",
            subTitle:"簡介與規則",
            desc:`初進遊戲便會先扣一筆參加費用，在時間限制內與電腦一起合作將球打進洞裡，只要其中一方將全部球打進洞，便宣告勝利，時間到和犯規則宣告遊戲失敗。
            `
        }
        this.game07={
            title:"百家樂",
            subTitle:"簡介與規則",
            desc:"你樂我樂百家樂"
        }
        // this.game08={
        //     title:"骰寶",
        //     subTitle:"簡介與規則",
        //     desc:"就是比大小拉!"
        // }



        this.state = {gameInfo:this.game01}
    }

    changeInfo(gameNum){
        this.setState({gameInfo:gameNum})
    }


    render() {
        return (
            <React.Fragment>
                <Broadcast />
                <div className="container" id="gameindex">
                    <div className="row">

                        <div id="sf-lobby-00001">

                            <a  onMouseLeave={()=>{this.changeInfo(this.game00)}}
                             onMouseOver={()=>{this.changeInfo(this.game01)}}                           
                            className="game" href="./games/blackjack/index.html" target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/blackjack.jpg" />21點
                            </a>

                            <a  onMouseLeave={()=>{this.changeInfo(this.game00)}}
                             onMouseOver={()=>{this.changeInfo(this.game02)}} className="game" href="./games/niuniu/public/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/niuniu.jpg" />妞妞
                            </a>

                            <a onMouseLeave={()=>{this.changeInfo(this.game00)}}
                             onMouseOver={()=>{this.changeInfo(this.game03)}} className="game" href="./games/dragonshoot/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/dragondoor.png" />射龍門
                            </a>

                            <a onMouseLeave={()=>{this.changeInfo(this.game00)}}
                             onMouseOver={()=>{this.changeInfo(this.game04)}} className="game" href="./games/fish/fishShooter.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/fish.jpg" />捕魚機
                            </a>

                            <a onMouseLeave={()=>{this.changeInfo(this.game00)}}
                            onMouseOver={()=>{this.changeInfo(this.game05)}} className="game" href="./games/tiger/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/tiger.jpg" />拉霸
                            </a>

                            <a onMouseLeave={()=>{this.changeInfo(this.game00)}}
                             onMouseOver={()=>{this.changeInfo(this.game06)}} className="game" href="./games/billiard/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/tableball.jpg" />撞球
                            </a>

                            <a onMouseLeave={()=>{this.changeInfo(this.game00)}}
                             onMouseOver={()=>{this.changeInfo(this.game07)}} className="game" href="./games/baccarat/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/baccarat.jpg" />百家樂
                            </a>

                            {/* <a onMouseLeave={()=>{this.changeInfo(this.game00)}}
                             onMouseOver={()=>{this.changeInfo(this.game08)}} className="game" href="./games/baccarat/index.html"
                                target="game" data-category="" data-sub_category="">
                                <img src="/images/gamelink/sicBo_logo.png" />骰寶
                            </a> */}

                        </div>

                        <div id="gameInfo">
                            <h2>{this.state.gameInfo.title}</h2>
                            
                            <p className="info">{this.state.gameInfo.subTitle}</p>
                            <p className="info" id="desc">{this.state.gameInfo.desc}</p>
                        </div>

                    </div>
                </div>


            </React.Fragment>
        );
    }
}

export default Maingamelink;