import React, { Component, useState, useContext } from 'react'
import Axios from "axios";
import { Doughnut } from 'react-chartjs-2';
import { MyContext } from '../../commons/context-manager';


const Point = (props) => {
    // 會員資料顯示
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState("");
    const [sdd_balance, setSdd_balance] = useState("");
    const [blackjack_balance, setBlackjack_balance] = useState("");
    const [fish_balance, setFish_balance] = useState("");
    const [tiger_balance, setTiger_balance] = useState("");
    const [billiard_balance, setBilliard_balance] = useState("");
    const [niuniu_balance, setNiuniu_balance] = useState("");
    const [baccarat_balance, setBaccarat_balance] = useState("");
    const [dicegame_balance, setDicegame_balance] = useState("");
    // 子傳父
    const { setTotal_balance } = useContext(MyContext);

    // 打後台拿資料
    const getMemberBalance = () => {
        Axios.post('http://localhost:3001/api/getBalance',
            {
                "account": props.account,
            }).then((res) => {
                // console.log( res)
                if (res.data.message === undefined) {
                    // console.log(props)
                    setBalance(props.balance);
                    setSdd_balance(res.data[0].sdd_balance);
                    setBlackjack_balance(res.data[0].blackjack_balance);
                    setFish_balance(res.data[0].fish_balance);
                    setTiger_balance(res.data[0].tiger_balance);
                    setBilliard_balance(res.data[0].billiard_balance);
                    setNiuniu_balance(res.data[0].niuniu_balance);
                    setBaccarat_balance(res.data[0].baccarat_balance);
                    setDicegame_balance(res.data[0].dicegame_balance);
                }
            })
    }

    // 甜甜圈圖
    const data = {
        labels: ['主帳戶', '射龍門', '21點', '妞妞', '捕魚機', '老虎機',
    '撞球遊戲','百家樂','骰子遊戲'],
        datasets: [
            {
                label: '# of Votes',
                data: [balance, sdd_balance, blackjack_balance,niuniu_balance, fish_balance,
                    tiger_balance, billiard_balance,baccarat_balance,dicegame_balance],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 102, 100, 0.2)',
                    'rgba(54, 159, 180, 0.2)',
                    'rgba(38, 69, 75, 0.2)',
                ],
                borderWidth: 1,

            },
        ],
    };

    return (

        <div id="sf-membercenter-point-getbalance-00002" >

            <div class="panel panel-primary">
                <div class="panel-heading">餘額圖</div>
                <div className="container col-sm" style={{ "width": "300px" }} ><Doughnut data={data} /></div>

                <div class="panel-body">
                    <ul class="info list-group">
                        {getMemberBalance()}
                        <li class="list-group-item col-sm-3"><span class="badge">{balance}</span>主帳戶</li>
                        <li class="list-group-item col-sm-3"><span class="badge">{sdd_balance}</span>射龍門</li>
                        <li class="list-group-item col-sm-3"><span class="badge">{blackjack_balance}</span>21點</li>
                        <li class="list-group-item col-sm-3"><span class="badge">{niuniu_balance}</span>妞妞</li>
                        <li class="list-group-item col-sm-3"><span class="badge">{fish_balance}</span>捕魚機</li>
                        <li class="list-group-item col-sm-3"><span class="badge">{tiger_balance}</span>老虎機</li>
                        <li class="list-group-item col-sm-3"><span class="badge">{billiard_balance}</span>撞球遊戲</li>
                        <li class="list-group-item col-sm-3"><span class="badge">{baccarat_balance}</span>百家樂</li>
                        <li class="list-group-item col-sm-3"><span class="badge">{dicegame_balance}</span>骰子遊戲</li>
                        {setTotal_balance(balance + sdd_balance + blackjack_balance + niuniu_balance + fish_balance
                            + tiger_balance + billiard_balance + baccarat_balance + dicegame_balance)}
                    </ul>
                </div>
            </div>

            {/* 警語先不用 */}
            {/* <div class="panel panel-primary info">
                        <div class="panel-heading"><i class="glyphicon glyphicon-info-sign"></i> 注意事項</div>
                        <div class="panel-body">
                            <ul>
                                <li>為加速您的服務，申請點數轉移時，務必先關閉您的遊戲。</li>
                                <li>若無您欲轉移之遊戲館，請洽詢線上客服。</li>
                                <li>若因網路因素轉移點數較慢，還請耐心等候。</li>
                                <li>過於頻繁的轉移動作，系統將自動濾除。</li>
                            </ul>
                        </div>
                    </div>*/}
        </div>

    )
}

export default Point;