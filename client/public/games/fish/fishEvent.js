import {
    Shell01, Shell02, Shell03
} from "./fishClass.js"



function fishEvent() {

    // 鍵盤控制 事件

    window.chooseShell = function () {
        return new Shell01();
    }

    window.addEventListener('keydown', function (e) {
        keyboardKeys[e.code] = true;

        let x;
        if (e.code == "Digit1") {
            for (x of shellBtnArr) x.color = "gray"
            shell01Btn.color = "red";
            shellCost = 1;
            window.chooseShell = function () {
                return new Shell01();
            }
        }
        if (e.code == "Digit2") {
            for (x of shellBtnArr) x.color = "gray"
            shell02Btn.color = "red";
            shellCost = 5;
            window.chooseShell = function () {
                return new Shell02();
            }
        }
        if (e.code == "Digit3") {
            for (x of shellBtnArr) x.color = "gray"
            shell03Btn.color = "red";
            shellCost = 8;
            window.chooseShell = function () {
                return new Shell03();
            }
        }

    });

    window.addEventListener('keyup', function (e) {

        keyboardKeys[e.code] = false;
        // 放開鍵盤時使cannon1轉動停止
        cannon1.turnAngle = 0;
    })

    // 滑鼠控制 事件

    // 按鈕點擊 事件與判斷
    // 按鈕點擊 事件與判斷
    let cx; //先宣告canvas座標
    let cy; //先宣告canvas座標
    canvas.addEventListener('mousedown', function (e) {
        // 滑鼠在該元素上的座標，若canvas經過css改變大小
        // 這個座標與canvas的座標就會有誤差
        let mx = e.offsetX
        let my = e.offsetY

        //canvas顯示在螢幕上的width與height，並轉型為浮點數，因為大小不一定是整數
        let cw = parseFloat(getComputedStyle(canvas).getPropertyValue('width'))
        let ch = parseFloat(getComputedStyle(canvas).getPropertyValue('height'))

        // canvas的原始width與height，也代表著 像素 與 座標
        let pw = canvas.width;
        let ph = canvas.height;

        // 前面兩者的比值
        let xPercent = pw / cw;
        let yPercent = ph / ch;

        // 將滑鼠座標乘上比值，就可以得到canvas座標
        cx = mx * xPercent;
        cy = my * yPercent;


        // 開始按鈕的點擊判斷
        if (startBtn.actived) {
            gameStart();
        }
        seeRecord();
        seeInfo();
    });

    canvas.addEventListener('mousemove', function (e) {
        // 滑鼠在該元素上的座標，若canvas經過css改變大小
        // 這個座標與canvas的座標就會有誤差
        let mx = e.offsetX
        let my = e.offsetY

        //canvas顯示在螢幕上的width與height，並轉型為浮點數，因為大小不一定是整數
        let cw = parseFloat(getComputedStyle(canvas).getPropertyValue('width'))
        let ch = parseFloat(getComputedStyle(canvas).getPropertyValue('height'))

        // canvas的原始width與height，也代表著 像素 與 座標
        let pw = canvas.width;
        let ph = canvas.height;

        // 前面兩者的比值
        let xPercent = pw / cw;
        let yPercent = ph / ch;

        // 將滑鼠座標乘上比值，就可以得到canvas座標
        cx = mx * xPercent;
        cy = my * yPercent;


        seeRecordHover();
        seeInfoHover();


    });


    // mousedown 事件用的函式----------------
    function gameStart() { //遊戲開始
        if (
            (cx > startBtn.edgeRight) ||
            (cx < startBtn.edgeLeft) ||
            (cy > startBtn.edgeBottom) ||
            (cy < startBtn.edgeTop)
        ) {
            return
        } else {
            requestAnimationFrame(gameRuning)
            startBtn.actived = false;
        }
    }



    function seeRecord() { // 看遊戲紀錄
        if (
            (cx > recoredBtn.edgeRight) ||
            (cx < recoredBtn.edgeLeft) ||
            (cy > recoredBtn.edgeBottom) ||
            (cy < recoredBtn.edgeTop)
        ) {
            return
        } else {
            window.open('./fishRecord.html')
        }
    }
    function seeInfo() { // 看遊戲介紹
        if (
            (cx > infoBtn.edgeRight) ||
            (cx < infoBtn.edgeLeft) ||
            (cy > infoBtn.edgeBottom) ||
            (cy < infoBtn.edgeTop)
        ) {
            return
        } else {
            window.open('./fishInfo.html')
        }
    }

    // 上面是mousedown 事件用的函式----------------------


    // mousemove 事件用的函式----------------------

    function seeRecordHover() { // 下注紀錄 字體放大
        if (
            (cx > recoredBtn.edgeRight) ||
            (cx < recoredBtn.edgeLeft) ||
            (cy > recoredBtn.edgeBottom) ||
            (cy < recoredBtn.edgeTop)
        ) {
            recoredBtn.fontSize = "50px"
            return
        } else {
            recoredBtn.fontSize = "60px"
        }
    }

    function seeInfoHover() { // 遊戲說明 字體放大
        if (
            (cx > infoBtn.edgeRight) ||
            (cx < infoBtn.edgeLeft) ||
            (cy > infoBtn.edgeBottom) ||
            (cy < infoBtn.edgeTop)
        ) {
            infoBtn.fontSize = "50px"
            return
        } else {
            infoBtn.fontSize = "60px"
        }
    }
    // 上面mousemove 事件用的函式----------------------



















    $(window).on({ //離開視窗時暫停
        "blur": function () {
            window.cancelAnimationFrame(startBtn.startID)
            startBtn.actived = true
            startBtn.reNew();
            keyboardKeys.Space = false; //避免切換視窗再回來出現自動射擊的BUG
        }
    })


};


export { fishEvent };