import React, { Component, useState, useContext } from 'react'
import Axios from "axios";
import { Doughnut } from 'react-chartjs-2';
import { MyContext } from '../../commons/context-manager';
import { useForm } from 'react-hook-form';
import $ from "jquery"


const Point = (props) => {
    // 會員資料顯示
    // const [account, setAccount] = useState("");
    const [balance, setBalance] = useState("");
    const [sdd_balance, setSdd_balance] = useState("");
    const [blackjack_balance, setBlackjack_balance] = useState("");
    const [fish_balance, setFish_balance] = useState("");
    const [tiger_balance, setTiger_balance] = useState("");
    const [billiard_balance, setBilliard_balance] = useState("");
    const [niuniu_balance, setNiuniu_balance] = useState("");
    const [baccarat_balance, setBaccarat_balance] = useState("");
    const [dicegame_balance, setDicegame_balance] = useState("");
    const [main_balance, setMain_balance] = useState("");

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
                    setMain_balance(res.data[0].main_balance);
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
            '撞球遊戲', '百家樂', '骰子遊戲'],
        datasets: [
            {
                label: '# of Votes',
                data: [main_balance, sdd_balance, blackjack_balance, niuniu_balance, fish_balance,
                    tiger_balance, billiard_balance, baccarat_balance, dicegame_balance],
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
    // 轉帳功能
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        // console.log($("#turnout option:selected").attr("name"))
        const turnout = $("#turnout option:selected").attr("name")
        const turnout_balance = $("#turnout option:selected").val()
        const turnin = $("#turnin option:selected").attr("name")
        const turnin_balance = $("#turnin option:selected").val()
        console.log(`turnout :${turnout}`)
        console.log(`turnout_balance : ${turnout_balance}`)
        console.log(`turnin : ${turnin}`)
        console.log(`turnin_balance : ${turnin_balance}`)
        console.log(data.money)

        if (parseFloat(turnout_balance) >= parseFloat(data.money)) {
            await Axios.post('http://localhost:3001/api/transform',
                {
                    "turnout": turnout,
                    "turnout_balance": parseFloat(turnout_balance) - parseFloat(data.money),
                    "turnin": turnin,
                    "turnin_balance": parseFloat(turnin_balance) + parseFloat(data.money),
                    "account": props.account

                }).then((res) => {
                    console.log(res)
                    if (res.data.affectedRows !== 0) {
                        alert("轉帳成功")
                    }
                    else { alert("其他錯誤,請洽詢客服") }
                })

        } else { alert("轉帳金額不足") }
    }

    return (

        <div id="sf-membercenter-point-getbalance-00002" >

            <div class="panel panel-primary">


                <div class="panel-body">
                    <div class="panel-heading">餘額總計</div>
                    <div className="col-sm-8" style={{ "width": "550px"}} >
                        <Doughnut data={data} />
                    </div>
                    <ul className="info list-group col-sm-5">
                        {/* {console.log("////point props/////")}
                        {console.log(props)}
                        {console.log("////point props/////")} */}
                        {getMemberBalance()}
                        <li class="list-group-item col-sm-6" style={{ "marginTop": "0.25em" }}>
                            <span class="badge">{main_balance.toLocaleString()}</span>
                            主帳戶</li>
                        <li class="list-group-item col-sm-6">
                            <span class="badge">{sdd_balance.toLocaleString()}</span>
                            射龍門</li>
                        <li class="list-group-item col-sm-6">
                            <span class="badge">{blackjack_balance.toLocaleString()}</span>
                            21點</li>
                        <li class="list-group-item col-sm-6">
                            <span class="badge">{niuniu_balance.toLocaleString()}</span>
                            妞妞</li>
                        <li class="list-group-item col-sm-6">
                            <span class="badge">{fish_balance.toLocaleString()}</span>
                            捕魚機</li>
                        <li class="list-group-item col-sm-6">
                            <span class="badge">{tiger_balance.toLocaleString()}</span>
                            老虎機</li>
                        <li class="list-group-item col-sm-6">
                            <span class="badge">{billiard_balance.toLocaleString()}</span>
                            撞球遊戲</li>
                        <li class="list-group-item col-sm-6">
                            <span class="badge">{baccarat_balance.toLocaleString()}</span>
                            百家樂</li>
                        {/* <li class="list-group-item col-sm-6">
                            <span class="badge">{dicegame_balance.toLocaleString()}</span>
                            骰子遊戲</li> */}
                        {setTotal_balance(main_balance + sdd_balance + blackjack_balance + niuniu_balance + fish_balance
                            + tiger_balance + billiard_balance + baccarat_balance + dicegame_balance)}
                    </ul>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group col-sm-3" >
                            <label for="turnout" class="col-md-3 control-label">轉出:</label>
                            <div class="col-md-9">
                                <select id="turnout" class="form-control input-sm" name="category"
                                // {...register('turnout', { required: true })} 
                                >
                                    <option selected="" disabled="" name="main_balance" value={main_balance}  >主帳戶</option>
                                    <option name="sdd_balance" value={sdd_balance} >射龍門</option>
                                    <option name="niuniu_balance" value={niuniu_balance}>妞妞</option>
                                    <option name="fish_balance" value={fish_balance}>捕魚機</option>
                                    <option name="tiger_balance" value={tiger_balance}>老虎機</option>
                                    <option name="billiard_balance" value={billiard_balance}>撞球遊戲</option>
                                    <option name="baccarat_balance" value={baccarat_balance}>百家樂</option>
                                    {/* <option name="dicegame_balance" value={dicegame_balance}>骰子遊戲</option> */}
                                </select>
                            </div>
                        </div>
                        <div class="form-group col-sm-3" >
                            <label for="turnin" class="col-md-3 control-label">轉入:</label>
                            <div class="col-md-9">
                                <select id="turnin" class="form-control input-sm" name="category"
                                // {...register('trunin', { required: true })} 
                                >
                                    <option selected="" disabled="" name="main_balance" value={main_balance} >主帳戶</option>
                                    <option name="sdd_balance" value={sdd_balance} >射龍門</option>
                                    <option name="niuniu_balance" value={niuniu_balance}>妞妞</option>
                                    <option name="fish_balance" value={fish_balance}>捕魚機</option>
                                    <option name="tiger_balance" value={tiger_balance}>老虎機</option>
                                    <option name="billiard_balance" value={billiard_balance}>撞球遊戲</option>
                                    <option name="baccarat_balance" value={baccarat_balance}>百家樂</option>
                                    {/* <option name="dicegame_balance" value={dicegame_balance}>骰子遊戲</option> */}
                                </select>
                            </div>
                        </div>
                        <div class="form-group col-sm-3">
                            <label for="nubers" class="col-md-3 control-label">金額:</label>

                            <div class="col-md-9">
                                <input type="text" class="form-control input-sm"
                                    {...register('money', { required: true })} />
                            </div>

                        </div>
                        <div class="form-group col-sm-3" style={{ textAlign: "center" }}>
                            {/* <label for="turnin" class="col-md-3 control-label"></label> */}
                            <button >確認</button>
                        </div>
                    </form>
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