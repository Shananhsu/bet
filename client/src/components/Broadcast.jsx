import React, { Component } from 'react';

class Broadcast extends Component {
    // state = {}
    render() {
        return (
            <div class="marquee_box">
                <a class="modal_btn" href="#modal" data-toggle="modal" data-text="/marquee/0" data-title="Marquee">

                    <div id="sf-marquee-00001">
                        <marquee class="marquee">
                            ※尊敬的會員您好：本站儲值管道請經由官方 [會員中心]→[儲值點數]頁面操作，為了避免會員權益受損，請勿聽信非官方儲值點數之方式，本站不予負責。
                            2.儲值點數若使用ATM匯款，匯款的帳號需要與出款的帳號一致，若是使用超商代碼繳費請妥善保留收據一個月以上
                            3.亞博棋牌以及VG棋牌進入遊戲將以5:1進行點數轉換，當離開遊戲館點數會回歸正常
                    </marquee>
                    </div>
                </a>
            </div>
        );
    }
}

export default Broadcast;