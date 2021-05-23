import {
    Cannon,
    fishes01, fishes02, fishes03, fishes04, fishes05, fishGenerator,
    GameButton, textObj
} from "./fishClass.js"

import { fishEvent } from "./fishEvent.js"

// 為了讓模組可以使用這邊的變數，而將很多變數的宣告改為 windos. 作為全域變數
// 這樣的改動會不會出問題?有沒有替代方法?

$(function () {



    // 匯入會員帳號與會員編號
    window.memberId = "0005"
    window.account = "Steven"
    // 匯入會員錢包，moneyBag會在新建amm時用作引數
    window.memberMoneyBag = 1000


    // 以上幾個資料需要等登入系統做好才能從cookie或session抓資料庫的資料


    // 建立遊戲區域

    // 建立並插入canvas
    window.canvas = document.createElement("canvas")
    window.ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;
    document.body.insertBefore(canvas, document.body.childNodes[0]);

    window.ctxFrames = 0; //紀錄幀數

    // 淨空畫面
    function clearArea() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }


    // ---------------------------------------
    // ---------------------------------------  



    // ------------------------------------------
    // 生成初始 物件 與需要的 變數
    // 生成初始 物件 與需要的 變數
    // 生成初始 物件 與需要的 變數

    // 開始按鈕
    window.startBtn = new textObj("textBtn", canvas.width / 2, canvas.height / 2, "100px", "white", "START");
    startBtn.actived = true
    startBtn.reNew();

    //查看下注紀錄按鈕
    window.recoredBtn = new textObj("textBtn", 1800, 950, "50px", "black", "下注紀錄")
    window.infoBtn = new textObj("textBtn", 1800, 1030, "50px", "black", "遊戲說明")


    // 砲彈選擇按鈕
    window.shell01Btn = new GameButton("shellBtn", 100, canvas.height - 90, 100, 150, shell01Img, "標準砲彈", 1, 1)
    shell01Btn.color = "red" //遊戲開始時預設的砲彈，要改顏色表示選中
    window.shell02Btn = new GameButton("shellBtn", 200 + 10, canvas.height - 90, 100, 150, shell02Img, "貫穿砲彈", 2, 5)
    window.shell03Btn = new GameButton("shellBtn", 300 + 20, canvas.height - 90, 100, 150, shell03Img, "彈跳砲彈", 3, 8)
    window.shellBtnArr = [shell01Btn, shell02Btn, shell03Btn];

    // 純文字
    // amm最後的引數代表彈藥量，也就是錢包餘額，分開處理
    // amm是一個物件而非一個值，應該不適合直接代入會員錢包
    let memberIdText = new textObj("txt", 1050, 950, "50px", "black", `會員帳號:${account}`);
    let ammTitle = new textObj("txt", 1050, 1030, "50px", "black", "錢包餘額:");
    window.amm = new textObj("num", 1270, 1030, "50px", "black", memberMoneyBag);
    let ammNotEnough = new textObj("textBtn", canvas.width / 2, canvas.height / 2, '100px', 'white', '銀彈不足')


    // 遊戲物件
    window.cannon1 = new Cannon();
    let shellsarr = []; //用空白鍵生成，寫在下面
    window.fisharr = [];

    window.fishArrIndx = 0; // 個別魚隻的陣列索引 在魚群生成器中使用,
    window.fishNumMax = 260; //魚群最大數量 在魚群生成器中使用,
    window.fishGeneratorArr = []; // 魚群陣列
    // x座標 y座標 行進方向(1為左到右，-1為右到左) 魚的種類
    // 小魚
    fishGeneratorArr.push(new fishGenerator((canvas.width + 300), 150, -1));
    fishGeneratorArr.push(new fishGenerator(-300, 300, 1));
    fishGeneratorArr.push(new fishGenerator((canvas.width + 300), 450, -1));
    fishGeneratorArr.push(new fishGenerator(-300, 600, 1));
    // 中魚
    fishGeneratorArr.push(new fishGenerator((canvas.width + 300), 200, -1, fishes02));
    fishGeneratorArr.push(new fishGenerator(-300, 400, 1, fishes02));
    // 大魚
    fishGeneratorArr.push(new fishGenerator(-300, 100, 1, fishes03));
    // 大紅魚
    fishGeneratorArr.push(new fishGenerator(undefined, undefined, undefined, fishes04));
    // 小快魚
    fishGeneratorArr.push(new fishGenerator((canvas.width + 120), 800, -1, fishes05));
    fishGeneratorArr.push(new fishGenerator((canvas.width + 120), 750, -1, fishes05));
    fishGeneratorArr.push(new fishGenerator((canvas.width + 120), 700, -1, fishes05));
    fishGeneratorArr.push(new fishGenerator(-120, 800, 1, fishes05));
    fishGeneratorArr.push(new fishGenerator(-120, 750, 1, fishes05));
    fishGeneratorArr.push(new fishGenerator(-120, 700, 1, fishes05));




    // -------------------------------------------------------------------
    // 更新畫面與控制所需要的變數
    // 更新畫面與控制所需要的變數
    // 以下為function gameRuning需要的變數

    // 砲彈相關變數
    // <生成並發射砲彈>所需變數
    let shellsArrIndex = 0 //砲彈陣列index
    let cooldownOK = 0; //可以發射砲彈的幀數
    let cooldownTime = 10; //發射冷卻時間

    window.keyboardKeys = {} //鍵盤控制要用的陣列

    window.shellCost = 1; //當前砲彈的費用，當錢包於和小於這個值的時候，無法發射

    // 以上為function gameRuning需要的變數---------------------------------------------


    // 更新資料與畫面
    // 更新資料與畫面
    // 更新資料與畫面-------------------------------------------------------------------------------
    window.gameRuning = function () {

        clearArea();
        ctxFrames += 1;

        infoBtn.reNew();
        recoredBtn.reNew();
        cannon1.reNew();
        // score.reNew(); // 總分數已不需要再顯示了，先註解掉
        ammTitle.reNew();
        memberIdText.reNew();
        amm.reNew(); //彈藥量

        shell01Btn.reNew();
        shell02Btn.reNew();
        shell03Btn.reNew();

        let x;
        // 執行魚群產生器
        for (x of fishGeneratorArr) {
            x.generator();
        }
        // 執行每顆砲彈的reNew            
        for (x of shellsarr) {
            x.reNew();
        }

        // 執行每隻魚的reNew
        for (x of fisharr) {
            x.reNew();
        }

        // 因為是經過判定才動作，因此要放在更新畫面區塊中
        // 檢查持續控制判定
        {
            // 左轉
            if (keyboardKeys && keyboardKeys.ArrowLeft && cannon1.angle >= -85) {
                cannon1.angle -= 1;
            }// 左轉
            // 右轉
            if (keyboardKeys && keyboardKeys.ArrowRight && cannon1.angle <= 85) {
                cannon1.angle += 1;
            }// 右轉

            // 生成並發射砲彈
            if (keyboardKeys && keyboardKeys.Space) {
                // cooldown的setTimeout控制發射冷卻時間
                if (ctxFrames >= cooldownOK && amm.text >= shellCost) {
                    cooldownOK = ctxFrames + cooldownTime;
                    shellsarr[shellsArrIndex] = window.chooseShell();
                    cannonSound.load();
                    cannonSound.play();
                    shellsArrIndex++;
                    // 控制場上最多有多少砲彈
                    if (shellsArrIndex > 50) shellsArrIndex = 0;

                }
                if (ctxFrames >= cooldownOK && amm.text < shellCost) {
                    ammNotEnough.reNew()

                }
            }// 生成並發射砲彈
        }// 檢查持續控制判定

        startBtn.startID = requestAnimationFrame(gameRuning)
    } // gameRuning




    // 將事件導入
    // 將事件導入
    // 將事件導入
    fishEvent();



    //用來畫中心點與中心矩形，校正位置用
    // ctx.fillStyle = "black"
    // ctx.fillRect(960 - 175, 540 - 40, 350, 80)
    // ctx.moveTo(960, 0)
    // ctx.lineTo(960, 1080)
    // ctx.stroke();
    // ctx.moveTo(0, 540)
    // ctx.lineTo(1920, 540)
    // ctx.stroke();



}) // READY