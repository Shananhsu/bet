// 點選籌碼累加到#money裡
let sumMoney = [];
let sum = 0;
let gameReady = 0;

// 一點籌碼圖片馬上新增到array
function handleChip(num) {
    readyc.style.webkitAnimationPlayState = "running";
    // 籌碼最多不能超過2倍下注金額
    if (parseInt(point.innerText) > 0 && parseInt(money.innerText) < parseInt(point.innerText)) {
        if (gameReady === 0) {
            sumMoney.push(num);
            for (i = 0; i < sumMoney.length; i++) {
                sum += sumMoney[i];
            }
            point.innerText -= num;
            money.innerText = sum;
            sum = 0;
        }
    } else {
        alert('餘額不足');
    }
}

function add50() {
    handleChip(50);
}

function add100() {
    handleChip(100);
}

function add500() {
    handleChip(500);
}

function add1000() {
    handleChip(1000);
}

function add5000() {
    handleChip(5000);
}

function reset() {
    money.innerText = 0;
    while (sumMoney.length) {
        sumMoney.pop();
    }
    money.innerText = sum;
    gameReady = 0;
}

resetc.onclick = reset;

// 點擊確認後無法再更動籌碼
readyc.onclick = function ready() {
    if (money.innerText > 0) {
        readyc.style.animationIterationCount = "1";
        gameStart.style.webkitAnimationPlayState = "running";
        gameReady++;
        resetc.disabled = true;
        readyc.disabled = true;
    } else {
        alert('下注金額不能低於0');
        gameReady = 0;
    }
}

// 在範圍取亂數function
let random = function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 如何篩選掉重複的花色？
let randomPick = [];
// 存取莊家牌的值
let dvalue1 = 0;
let dvalue2 = 0;
let dvalue3 = 0;
let dvalue4 = 0;
let dvalue5 = 0;
let dvalue6 = 0;
// 存取玩家牌的值
let pvalue1 = 0;
let pvalue2 = 0;
let pvalue3 = 0;
let pvalue4 = 0;
let pvalue5 = 0;
let pvalue6 = 0;
// 存取牌
let resultPc1 = "";
let resultPc2 = "";
let resultPc3 = "";
let resultPc4 = "";
let resultPc5 = "";
let resultPc6 = "";

let resultDc1 = "";
let resultDc2 = "";
let resultDc3 = "";
let resultDc4 = "";
let resultDc5 = "";
let resultDc6 = "";

let dpoints = 0;
let ppoints = 0;

// 計算莊家有幾張牌
let dpcs = 0;
// 計算玩家有幾張牌
let ppcs = 0;

const sendToBackend = () => {
    axios.post("http://localhost:3001/blackjack/update", {
        moneyAfter: parseInt(point.innerText),
        result: result,
        dealerCards: `${resultDc1},${resultDc2},${resultDc3},${resultDc4},${resultDc5},${resultDc6}`,
        playerCards: `${resultPc1},${resultPc2},${resultPc3},${resultPc4},${resultPc5},${resultPc6}`,
        status: `莊家:${dpoints} 玩家:${ppoints} ${status}`,
    }).then((e) => { console.log(e); })
}

// 執行判斷1的function
function checkAce() {
    if (pvalue1[0] === 1 || pvalue2[0] === 1) {
        // setTimeout(() => {
        if (pvalue1[0] === 1 && pvalue2[0] === 1) {
            choose.style.display = "block";
            openc.disabled = true;
            add.disabled = true;
        } else if (pvalue1[0] === 1 || pvalue2[0] === 1) {
            if (pvalue1[0] + 10 + pvalue2[0] == 21) {
                setTimeout(() => {
                    ppoints = 21;
                    playerP.innerText = ppoints;
                    // document.getElementsByClassName("whoWin")[num].innerText = "贏";
                    // document.getElementsByClassName("whoWin")[num].style = "color:red";
                    result += parseInt(money.innerText) * 2;
                    point.innerText = parseInt(point.innerText) + parseInt(money.innerText) * 3;
                    setTimeout(() => {
                        alert('Black jack 玩家贏');
                        sendToBackend();
                    }, 200)
                    restart.style.display = "block";
                    openc.disabled = true;
                }, 100)
            } else {
                choose.style.display = "block";
                openc.disabled = true;
                add.disabled = true;
            }
        }
        // }, 700)
    }
    if (dvalue1[0] === 1 || dvalue2[0] === 1) {
        if (dvalue1[0] === 1 && dvalue2[0] === 1) {
            dvalue1[0] = 1;
            dvalue2[0] = 11;
        } else if (dvalue1[0] === 1 || dvalue2[0] === 1) {
            if (dvalue1[0] + 10 + dvalue2[0] === 21) {
                dpoints = 21;
                dealerP.innerText = parseInt(dvalue2);
            } else if (dpoints > 6) {
                dpoints += 10;
            }
        }
    }
}
// 選擇點數
function one() {
    ppoints = parseInt(pvalue1) + parseInt(pvalue2);
    choose.style.display = "none";
    playerP.innerText = ppoints;
    openc.disabled = false;
    add.disabled = false;
}

function eleven() {
    ppoints = parseInt(pvalue1) + parseInt(pvalue2) + 10;
    choose.style.display = "none";
    playerP.innerText = ppoints;
    openc.disabled = false;
    add.disabled = false;
}

gameStart.onclick = function () {
    if (money.innerText > 0) {
        if (readyc.disabled = true) {
            gameStart.disabled = true;
            gameStart.style.animationIterationCount = "1";
            add.style.webkitAnimationPlayState = "running";
            openc.style.webkitAnimationPlayState = "running";
            // 使用object key-value
            randomPick = [
                { c1: 1 },
                { c2: 2 },
                { c3: 3 },
                { c4: 4 },
                { c5: 5 },
                { c6: 6 },
                { c7: 7 },
                { c8: 8 },
                { c9: 9 },
                { c10: 10 },
                { c11: 10 },
                { c12: 10 },
                { c13: 10 },
                { d1: 1 },
                { d2: 2 },
                { d3: 3 },
                { d4: 4 },
                { d5: 5 },
                { d6: 6 },
                { d7: 7 },
                { d8: 8 },
                { d9: 9 },
                { d10: 10 },
                { d11: 10 },
                { d12: 10 },
                { d13: 10 },
                { h1: 1 },
                { h2: 2 },
                { h3: 3 },
                { h4: 4 },
                { h5: 5 },
                { h6: 6 },
                { h7: 7 },
                { h8: 8 },
                { h9: 9 },
                { h10: 10 },
                { h11: 10 },
                { h12: 10 },
                { h13: 10 },
                { s1: 1 },
                { s2: 2 },
                { s3: 3 },
                { s4: 4 },
                { s5: 5 },
                { s6: 6 },
                { s7: 7 },
                { s8: 8 },
                { s9: 9 },
                { s10: 10 },
                { s11: 10 },
                { s12: 10 },
                { s13: 10 }
            ]

            // 取出陣列中的key值
            // Object.keys(randomPick[n]);
            // 取出陣列中的value值
            // Object.values(randomPick[n]);
            // get randomPick object的keys值

            // 用splice扣除發過的牌
            // 莊家開局的第一張牌
            let dsc1 = random(0, randomPick.length - 1);
            resultDc1 = Object.keys(randomPick[dsc1]);
            let gdv1 = randomPick.splice(dsc1, 1);


            // 玩家開局的第一張牌
            let psc1 = random(0, randomPick.length - 1);
            resultPc1 = Object.keys(randomPick[psc1]);
            let gpv1 = randomPick.splice(psc1, 1);

            // 莊家開局的第二張牌
            let dsc2 = random(0, randomPick.length - 1);
            resultDc2 = Object.keys(randomPick[dsc2]);
            let gdv2 = randomPick.splice(dsc2, 1);

            // 玩家開局的第二張牌
            let psc2 = random(0, randomPick.length - 1);
            resultPc2 = Object.keys(randomPick[psc2]);
            let gpv2 = randomPick.splice(psc2, 1);

            // 發牌
            setTimeout(() => {
                let DcreateImg = document.createElement('img');
                cardback.appendChild(DcreateImg);
                DcreateImg.id = 'dc1';
                DcreateImg.setAttribute('src', '');
                dc1.src = `./img/cards/${resultDc1}.png`;
                cardback.style.display = "block";
                cb.style.display = "block";
            }, 100)

            setTimeout(() => {
                let PcreateImg = document.createElement('img');
                playerscards.appendChild(PcreateImg);
                PcreateImg.id = 'pc1';
                PcreateImg.setAttribute('src', '');
                pc1.src = `img/cards/${resultPc1}.png`;
            }, 250)
            setTimeout(() => {
                let DcreateImg2 = document.createElement('img');
                dealerscards.appendChild(DcreateImg2);
                DcreateImg2.id = 'dc2';
                DcreateImg2.setAttribute('src', '');
                dc2.src = `./img/cards/${resultDc2}.png`;
            }, 400)
            setTimeout(() => {
                let PcreateImg2 = document.createElement('img');
                playerscards.appendChild(PcreateImg2);
                PcreateImg2.id = 'pc2';
                PcreateImg2.setAttribute('src', '');
                pc2.src = `img/cards/${resultPc2}.png`;
            }, 550)

            dpcs = 2;
            ppcs = 2;

            // 莊家點數
            dvalue1 = Object.values(gdv1[0]);
            dvalue2 = Object.values(gdv2[0]);

            // 玩家點數
            pvalue1 = Object.values(gpv1[0]);
            pvalue2 = Object.values(gpv2[0]);

            // 計算點數
            dpoints = parseInt(dvalue1) + parseInt(dvalue2);
            ppoints = parseInt(pvalue1) + parseInt(pvalue2);

            setTimeout(() => {
                dealerP.innerText = parseInt(dvalue2)
            }, 400)
            setTimeout(() => {
                playerP.innerText = parseInt(pvalue1)
            }, 250)
            setTimeout(() => {
                playerP.innerText = parseInt(pvalue1) + parseInt(pvalue2)
            }, 550)
            setTimeout(() => {
                checkAce();
            }, 600)

            axios.post("http://localhost:3001/blackjack/store", {
                account: account.innerText,
                bet: parseInt(money.innerText),
                moneyBefore: parseInt(point.innerText) + parseInt(money.innerText),
                moneyAfter: parseInt(point.innerText),
                betTime: (new Date()).toLocaleString(),
                gameType: "21點"
            }).then(function (e) {
                console.log(e);
            })
        }
    } else {
        alert('請先下注');
        gameReady = 0;
    }
}

// 補牌條件設定
let times = 0;
let result = 0;
let status = "";
let checkBust = function () {
    setTimeout(() => {
        if (ppoints > 21) {
            playerP.style = "color:red";
            // document.getElementsByClassName("whoWin")[num].innerText = "輸";
            // document.getElementsByClassName("whoWin")[num].style = "color:green";
            restart.style.display = "block";
            openc.disabled = true;
            add.style.animationIterationCount = "1";
            openc.style.animationIterationCount = "1";
            restart.style.webkitAnimationPlayState = "running";
            setTimeout(() => {
                alert('爆牌 莊家贏')
            }, 200)
            result -= parseInt(money.innerText);
            status = "莊家贏";
            sendToBackend();
        }
    }, 200)
}

// 玩家加牌
add.onclick = function () {
    if (gameStart.disabled = true) {
        openc.style.webkitAnimationPlayState = "running";
        if (times === 0 && ppoints < 21) {
            let psc3 = random(0, randomPick.length - 1);
            resultPc3 = Object.keys(randomPick[psc3]);
            let gpv3 = randomPick.splice(psc3, 1);
            pvalue3 = Object.values(gpv3[0]);

            let PcreateImg = document.createElement('img');
            PcreateImg.setAttribute('src', '');
            PcreateImg.id = 'pc3';
            playerscards.appendChild(PcreateImg);
            pc3.src = `img/cards/${resultPc3}.png`;
            ppoints += parseInt(pvalue3);

            if (pvalue3[0] === 1 && ppoints < 11) {
                choose.style.display = "block";
                add.disabled = true;
                openc.disabled = true;
            }
            playerP.innerText = ppoints;

            checkBust();

            ppcs++;
        }

        if (times === 1 && ppoints < 21) {
            let psc4 = random(0, randomPick.length - 1);
            resultPc4 = Object.keys(randomPick[psc4]);
            let gpv4 = randomPick.splice(psc4, 1);
            pvalue4 = Object.values(gpv4[0]);

            let PcreateImg = document.createElement('img');
            PcreateImg.setAttribute('src', '');
            PcreateImg.id = 'pc4';
            playerscards.appendChild(PcreateImg);
            pc4.src = `img/cards/${resultPc4}.png`;
            ppoints += parseInt(pvalue4);

            if (pvalue4[0] === 1 && ppoints < 11) {
                choose.style.display = "block";
                openc.disabled = ture;
            }

            playerP.innerText = ppoints;

            checkBust();
            ppcs++;
        }

        if (times === 2 && ppoints < 21) {
            let psc5 = random(0, randomPick.length - 1);
            resultPc5 = Object.keys(randomPick[psc5]);
            let gpv5 = randomPick.splice(psc5, 1);
            pvalue5 = Object.values(gpv5[0]);

            let PcreateImg = document.createElement('img');
            PcreateImg.setAttribute('src', '');
            PcreateImg.id = 'pc5';
            playerscards.appendChild(PcreateImg);
            pc5.src = `img/cards/${resultPc5}.png`;
            ppoints += parseInt(pvalue5);

            if (pvalue5[0] === 1 && ppoints < 11) {
                choose.style.display = "block";
                openc.disabled = ture;
            }
            playerP.innerText = ppoints;
            checkBust();
            ppcs++;
        }

        if (times === 3 && ppoints < 21) {
            let psc6 = random(0, randomPick.length - 1);
            resultPc6 = Object.keys(randomPick[psc6]);
            let gpv6 = randomPick.splice(psc6, 1);
            pvalue6 = Object.values(gpv6[0]);

            let PcreateImg = document.createElement('img');
            PcreateImg.setAttribute('src', '');
            PcreateImg.id = 'pc6';
            playerscards.appendChild(PcreateImg);
            pc6.src = `img/cards/${resultPc6}.png`;
            ppoints += parseInt(pvalue6);

            if (pvalue6[0] === 1 && ppoints < 11) {
                choose.style.display = "block";
                openc.disabled = true;
            }
            playerP.innerText = ppoints;

            checkBust();
            ppcs++;
        }
        times++;
    }
}

// 判斷輸贏
let vic = function () {
    setTimeout(() => {
        if (dpoints > ppoints && dpoints < 22 || ppoints > 21) {
            setTimeout(() => {
                alert(`莊家${dpoints}點 莊家贏`)
            }, 200)
            result -= parseInt(money.innerText);
            status = "莊家贏";
            sendToBackend();
            // document.getElementsByClassName("whoWin")[num].innerText = "輸";
            // document.getElementsByClassName("whoWin")[num].style = "color:green";
        }
        if (dpoints > 21) {
            dealerP.style = "color:red";
            result += parseInt(money.innerText);
            status = "玩家贏";
            sendToBackend();
        }
        if (dpoints < ppoints && ppoints < 22 || dpoints > 21) {
            setTimeout(() => {
                alert(`玩家${ppoints}點 玩家贏`)
            }, 200)
            // document.getElementsByClassName("whoWin")[num].innerText = "贏";
            // document.getElementsByClassName("whoWin")[num].style = "color:red";
            result += parseInt(money.innerText);
            status = "玩家贏"
            point.innerText = parseInt(point.innerText) + parseInt(money.innerText) * 2;
            sendToBackend();
        }
        if (dpoints === ppoints) {
            setTimeout(() => {
                alert("和局")
            }, 200)
            result = 0;
            status = "和局";
            // document.getElementsByClassName("whoWin")[num].innerText = "和";
            // document.getElementsByClassName("whoWin")[num].style = "color:white";
            point.innerText = parseInt(point.innerText) + parseInt(money.innerText);
            sendToBackend();
        }
    }, 500);
}


// 開牌後做莊家開牌特效
openc.onclick = function () {
    add.style.animationIterationCount = "1";
    if (ppoints > 0 && openc.disabled != true) {
        openc.disabled = true;
        if (dpcs < 3) {
            dealerP.innerText = dpoints;
        }
        openc.style.animationIterationCount = "1";
        restart.style.webkitAnimationPlayState = "running";
        // 莊家自動補牌
        setTimeout(() => {
            if (dpoints < 17 || dpoints <= parseInt(pvalue2) + parseInt(pvalue3)) {
                let dsc3 = random(0, randomPick.length - 1);
                resultDc3 = Object.keys(randomPick[dsc3]);
                let gdv3 = randomPick.splice(dsc3, 1);
                dvalue3 = Object.values(gdv3[0]);
                let DcreateImg = document.createElement('img');
                DcreateImg.setAttribute('src', '');
                DcreateImg.id = 'dc3';
                dealerscards.appendChild(DcreateImg);
                dc3.src = `img/cards/${resultDc3}.png`;
                dpoints += parseInt(dvalue3);
                if (dvalue3[0] === 1 && dpoints < 11) {
                    dpoints += 10;
                }
                dealerP.innerText = dpoints;
                dpcs++;

                setTimeout(() => {
                    if (dpoints < 17 || dpoints < parseInt(pvalue2) + parseInt(pvalue3) + parseInt(pvalue4) + parseInt(pvalue5) + parseInt(pvalue6) && dpoints < 21) {
                        let dsc4 = random(0, randomPick.length - 1);
                        resultDc4 = Object.keys(randomPick[dsc4]);
                        let gdv4 = randomPick.splice(dsc4, 1);
                        dvalue4 = Object.values(gdv4[0]);
                        let DcreateImg = document.createElement('img');
                        DcreateImg.setAttribute('src', '');
                        DcreateImg.id = 'dc4';
                        dealerscards.appendChild(DcreateImg);
                        dc4.src = `img/cards/${resultDc4}.png`;
                        dpoints += parseInt(dvalue4);
                        if (dvalue4[0] === 1 && dpoints < 11) {
                            dpoints += 10;
                        }
                        dealerP.innerText = dpoints;
                        dpcs++;

                        setTimeout(() => {
                            if (dpoints < 16) {
                                let dsc5 = random(0, randomPick.length - 1);
                                resultDc5 = Object.keys(randomPick[dsc5]);
                                let gdv5 = randomPick.splice(dsc5, 1);
                                dvalue5 = Object.values(gdv5[0]);
                                let DcreateImg = document.createElement('img');
                                DcreateImg.setAttribute('src', '');
                                DcreateImg.id = 'dc5';
                                dealerscards.appendChild(DcreateImg);
                                dc5.src = `img/cards/${resultDc5}.png`;
                                dpoints += parseInt(dvalue5);
                                if (dvalue5[0] === 1 && dpoints < 11) {
                                    dpoints += 10;
                                }
                                dealerP.innerText = dpoints;
                                dpcs++;

                                setTimeout(() => {
                                    if (dpoints < 16) {
                                        let dsc6 = random(0, randomPick.length - 1);
                                        resultDc6 = Object.keys(randomPick[dsc6]);
                                        let gdv6 = randomPick.splice(dsc6, 1);
                                        dvalue6 = Object.values(gdv6[0]);
                                        let DcreateImg = document.createElement('img');
                                        DcreateImg.setAttribute('src', '');
                                        DcreateImg.id = 'dc6';
                                        dealerscards.appendChild(DcreateImg);
                                        dc6.src = `img/cards/${resultDc6}.png`;
                                        dpoints += parseInt(dvalue6);
                                        if (dvalue6[0] === 1 && dpoints < 11) {
                                            dpoints += 10;
                                        }
                                        dealerP.innerText = dpoints;
                                        dpcs++;
                                    }
                                }, 600)
                            }
                        }, 450)
                    }
                }, 300)
            }
        }, 150)
        vic();
        cb.style.display = "none";
    }
}


restart.onclick = function () {
    restart.style.animationIterationCount = "1";
    // 自行判斷i到多少然後結束迴圈
    for (i = 1; i <= dpcs; i++) {
        var obj = document.getElementById(`dc${i}`);
        var imgParent = obj.parentNode; //取得img的父層
        imgParent.removeChild(obj); //通過img的父層把它删除
    }
    for (x = 1; x <= ppcs; x++) {
        var obj1 = document.getElementById(`pc${x}`);
        var imgParent1 = obj1.parentNode; //取得img的父層
        imgParent1.removeChild(obj1); //通過img的父層把它删除
    }

    dealerP.style.color = "white";
    playerP.style.color = "white";
    dealerP.innerText = 0;
    playerP.innerText = 0;
    resetc.disabled = false;
    readyc.disabled = false;
    gameStart.disabled = false;
    add.disabled = false;
    openc.disabled = false;

    dpoints = 0;
    ppoints = 0;
    times = 0;
    dpcs = 0;
    ppcs = 0;
    money.innerText = 0;
    gameReady = 0;
    cardback.style.display = "none";
    status = "";
    result = 0;
    reset();
}