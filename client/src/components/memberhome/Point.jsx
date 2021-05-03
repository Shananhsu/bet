import React, { Component } from 'react'

import { Doughnut } from 'react-chartjs-2';
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 111, 23],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderWidth: 1,

        },
    ],
};
class Point extends Component {

    render() {
        return (
        
                <div id="sf-membercenter-point-getbalance-00002" >
                    <div class="panel panel-primary">
                        <div class="panel-heading">目前額度</div>
                        <div className="container col-sm" style={{width:"480px"}} ><Doughnut data={data} /></div>
                        
                        <div class="panel-body">
                            <ul class="info list-group">
                                <li class="list-group-item col-sm-3"><span class="badge">0</span>主帳戶</li>
                                <li class="list-group-item col-sm-3"><span class="badge">0</span>紅利點數</li>
                                <li class="list-group-item col-sm-3"><span class="badge">0</span>返水</li>
                                <li class="list-group-item col-sm-3">
                                    <span class="badge point" data-num="14">查詢</span>
                                                Super
                                </li>
                                <li class="list-group-item col-sm-3">
                                    <span class="badge point" data-num="2">查詢</span>
                                                歐博
                                </li>
                                <li class="list-group-item col-sm-3">
                                    <span class="badge point" data-num="9">查詢</span>
                                                沙龍
                                </li>
                                <li class="list-group-item col-sm-3">
                                    <span class="badge point" data-num="27">查詢</span>
                                                AMEBA
                                </li>
                                <li class="list-group-item col-sm-3">
                                    <span class="badge point" data-num="34">查詢</span>
                                                DG
                                </li>
                                <li class="list-group-item col-sm-3">
                                    <span class="badge point" data-num="41">查詢</span>
                                                36588六合彩
                                </li>
                                <li class="list-group-item col-sm-3">
                                    <span class="badge point" data-num="42">查詢</span>
                                                OG
                                </li>
                                <li class="list-group-item col-sm-3">
                                    <span class="badge point" data-num="43">查詢</span>
                                                WM
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="panel panel-primary info">
                        <div class="panel-heading"><i class="glyphicon glyphicon-info-sign"></i> 注意事項</div>
                        <div class="panel-body">
                            <ul>
                                <li>為加速您的服務，申請點數轉移時，務必先關閉您的遊戲。</li>
                                <li>若無您欲轉移之遊戲館，請洽詢線上客服。</li>
                                <li>若因網路因素轉移點數較慢，還請耐心等候。</li>
                                <li>過於頻繁的轉移動作，系統將自動濾除。</li>
                            </ul>
                        </div>
                    </div>
                </div>
         
        )
    }
}
export default Point;