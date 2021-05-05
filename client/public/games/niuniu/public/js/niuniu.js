// 點選籌碼累加到#money裡
let sumMoney = [];
let sum = 0;
let gameReady = 0;

// 一點籌碼圖片馬上新增到array
function handleChip(num) {
    // 籌碼最多不能超過7倍下注金額
    if ((parseInt(point.innerText) + parseInt(money.innerText)) - (parseInt(money.innerText) + num) * 7 > 0) {
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
    point.innerText = parseInt(point.innerText) + parseInt(money.innerText);
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

let randomPickCards = [];
let randomPickPoints = [];

// // 存取莊家牌的值
let dvalue1 = 0;
let dvalue2 = 0;
let dvalue3 = 0;
let dvalue4 = 0;
let dvalue5 = 0;
// // 存取玩家牌的值
let pvalue1 = 0;
let pvalue2 = 0;
let pvalue3 = 0;
let pvalue4 = 0;
let pvalue5 = 0;
// 存取點數
let dpoints = 0;
let ppoints = 0;
let dList = [];
let pList = [];

let dsuits = [];
let psuits = [];
let suits = {
    c: 0,
    d: 1,
    h: 2,
    s: 3
}

// 排序陣列大小
function order(a, b) {
    return a - b;
}
// 存取選擇的點數
let temp = [];
// 選取張數
let select = 0;
gameStart.onclick = function () {
    if (money.innerText > 0) {
        if (readyc.disabled === true) {
            gameStart.disabled = true;
            openc.disabled = false;

            randomPickCards = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13'];
            randomPickPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

            for (i = 1; i <= 5; i++) {
                let dindex = 0;
                let pindex = 0;
                let dcard = "";
                let dvalue = 0;
                let pcard = "";
                let pvalue = 0;

                function getCard() {
                    dindex = random(0, randomPickCards.length - 1);
                    dcard = randomPickCards[dindex];
                    dvalue = randomPickPoints[dindex];
                    randomPickCards.splice(dindex, 1);
                    randomPickPoints.splice(dindex, 1);
                    pindex = random(0, randomPickCards.length - 1);
                    pcard = randomPickCards[pindex];
                    pvalue = randomPickPoints[pindex];
                    randomPickCards.splice(pindex, 1);
                    randomPickPoints.splice(pindex, 1);
                }

                if (i === 1) {
                    getCard();
                    dvalue1 = dvalue;
                    pvalue1 = pvalue;
                }
                if (i === 2) {
                    getCard();
                    dvalue2 = dvalue;
                    pvalue2 = pvalue;
                }
                if (i === 3) {
                    getCard();
                    dvalue3 = dvalue;
                    pvalue3 = pvalue;
                }
                if (i === 4) {
                    getCard();
                    dvalue4 = dvalue;
                    pvalue4 = pvalue;
                }
                if (i === 5) {
                    getCard();
                    dvalue5 = dvalue;
                    pvalue5 = pvalue;
                }

                document.getElementById(`dc${i}`).innerHTML = `<img src="img/card/${dcard}.png">`;
                document.getElementById(`pc${i}`).innerHTML = `<img src="img/card/${pcard}.png">`;
                dpoints = dvalue1 + dvalue2 + dvalue3 + dvalue4 + dvalue5;
                ppoints = pvalue1 + pvalue2 + pvalue3 + pvalue4 + pvalue5;

                dList = [dvalue1, dvalue2, dvalue3, dvalue4, dvalue5];
                pList = [pvalue1, pvalue2, pvalue3, pvalue4, pvalue5];
                dList.sort(order);
                pList.sort(order);

                dsuits.push(dcard);
                psuits.push(pcard);

                // 去掉英文字母排序
                function getWord(item1, item2) {
                    return item1.substr(1) - item2.substr(1)
                }
                dsuits.sort(getWord);
                psuits.sort(getWord);

            }

            // axios
            axios.post("http://localhost:3001/niuniu/store", {
                account: account.innerText,
                bet: parseInt(money.innerText),
                moneyBefore: parseInt(point.innerText) + parseInt(money.innerText),
                moneyAfter: parseInt(point.innerText),
                // betTime: (new Date()).toLocaleString(),
                gameType: "妞妞"
            }).then(function (e) {
                console.log(e);
            })

            // 發牌從一張慢慢變五張
            // 開牌動畫
            // $("#openc").click(function () {
            //     $("#dealerscards").animate({ width: "590px" }, "slow");
            //     $("#dealerscards img").css("position", "static");
            //     $("#playerscards").animate({ width: "590px" }, "slow");
            // })
            // 可選兩張或三張


        }
    } else {
        alert('請先下注');
        gameReady = 0;
    }
}

$("#pc1").on("click", function () {
    if (select < 3 && pc1.style.bottom === "") {
        $(this).css("bottom", "20px");
        temp.push(pvalue1);
        temp.sort(order);
        ppoints -= pvalue1;
        select++;
    } else if (pc1.style.bottom === "20px") {
        $(this).css("bottom", "");
        temp.splice(temp.indexOf(pvalue1), 1)
        ppoints += pvalue1;
        select--;
    }
})
$("#pc2").on("click", function () {
    if (select < 3 && pc2.style.bottom === "") {
        $(this).css("bottom", "20px");
        temp.push(pvalue2);
        temp.sort(order);
        ppoints -= pvalue2;
        select++;
    } else if (pc2.style.bottom === "20px") {
        $(this).css("bottom", "");
        temp.splice(temp.indexOf(pvalue2), 1)
        ppoints += pvalue2;
        select--;
    }
})
$("#pc3").on("click", function () {
    if (select < 3 && pc3.style.bottom === "") {
        $(this).css("bottom", "20px");
        temp.push(pvalue3);
        temp.sort(order);
        ppoints -= pvalue3;
        select++;
    } else if (pc3.style.bottom === "20px") {
        $(this).css("bottom", "");
        temp.splice(temp.indexOf(pvalue3), 1)
        ppoints += pvalue3;
        select--;
    }
})
$("#pc4").on("click", function () {
    if (select < 3 && pc4.style.bottom === "") {
        $(this).css("bottom", "20px");
        temp.push(pvalue4);
        temp.sort(order);
        ppoints -= pvalue4;
        select++;
    } else if (pc4.style.bottom === "20px") {
        $(this).css("bottom", "");
        temp.splice(temp.indexOf(pvalue4), 1)
        ppoints += pvalue4;
        select--;
    }
})
$("#pc5").on("click", function () {
    if (select < 3 && pc5.style.bottom === "") {
        $(this).css("bottom", "20px");
        temp.push(pvalue5);
        temp.sort(order);
        ppoints -= pvalue5;
        select++;
    } else if (pc5.style.bottom === "20px") {
        $(this).css("bottom", "");
        temp.splice(temp.indexOf(pvalue5), 1)
        ppoints += pvalue5;
        select--;
    }
})

let result = 0;
let staus = "";
// 判斷輸贏
function dealerWin() {
    status = "莊家贏";
    if (dpoints < 8) {
        result -= parseInt(money.innerText);
    }
    if (dpoints === 8 || dpoints === 9) {
        point.innerText = parseInt(point.innerText) - parseInt(money.innerText);
        result -= parseInt(money.innerText) * 2;
    }
    if (dpoints === 10) {
        if ((dsuits.filter(x => x.slice(1) > 10)).length === 5) {
            point.innerText = parseInt(point.innerText) - parseInt(money.innerText) * 4;
            result -= parseInt(money.innerText) * 5;
        } else {
            point.innerText = parseInt(point.innerText) - parseInt(money.innerText) * 2;
            result -= parseInt(money.innerText) * 3;
        }
    }
}
function playerWin() {
    status = "玩家贏";
    if (ppoints < 8) {
        point.innerText = parseInt(point.innerText) + parseInt(money.innerText) * 2;
        result = "+" + parseInt(money.innerText);
    }
    if (ppoints === 8 || ppoints === 9) {
        point.innerText = parseInt(point.innerText) + parseInt(money.innerText) * 3;
        result = "+" + parseInt(money.innerText) * 2;
    }
    if (ppoints === 10) {
        if ((psuits.filter(x => x.slice(1) > 10)).length === 5) {
            point.innerText = parseInt(point.innerText) + parseInt(money.innerText) * 6;
            result = "+" + parseInt(money.innerText) * 5;
        } else {
            point.innerText = parseInt(point.innerText) + parseInt(money.innerText) * 4;
            result = "+" + parseInt(money.innerText) * 3;
        }
    }
}

// 選擇的牌
let total = 0;
openc.onclick = function () {
    if (select !== 0) {
        for (i = 0; i < temp.length; i++) {
            total += temp[i];
        }
        // 判斷點數
        if (temp.length === 3) {
            if (total % 10 === 0) {
                playerP.innerText = ppoints;
                if (playerP.innerText > 10) {
                    playerP.innerText -= 10;
                    ppoints = parseInt(playerP.innerText);
                }
                if (ppoints % 10 === 0) {
                    playerP.innerText = "妞妞";
                    ppoints = 10;
                }
            } else {
                playerP.innerText = "烏龍";
                ppoints = 0;
            }
        } else if (total % 10 === 0 && ppoints % 10 === 0) {
            playerP.innerText = "妞妞";
            ppoints = 10;
        } else if (total % 10 !== 0 && ppoints % 10 === 0) {
            playerP.innerText = total;
            ppoints = total;
            if (total > 10) {
                playerP.innerText -= 10;
                ppoints = parseInt(playerP.innerText);
            }
        } else {
            playerP.innerText = "烏龍";
            ppoints = 0;
        }

        if ((dvalue1 + dvalue2 + dvalue3) % 10 === 0) {
            dealerP.innerText = dvalue4 + dvalue5;
            dpoints = parseInt(dealerP.innerText);

            if (dealerP.innerText % 10 === 0) {
                dealerP.innerText = "妞妞";
                dpoints = 10;
            }
            if (dealerP.innerText > 10) {
                dealerP.innerText -= 10;
                dpoints = parseInt(dealerP.innerText);
            }
        } else if ((dvalue1 + dvalue2 + dvalue4) % 10 === 0) {
            dealerP.innerText = dvalue3 + dvalue5;
            dpoints = parseInt(dealerP.innerText);

            if (dealerP.innerText % 10 === 0) {
                dealerP.innerText = "妞妞";
                dpoints = 10;
            }
            if (dealerP.innerText > 10) {
                dealerP.innerText -= 10;
                dpoints = parseInt(dealerP.innerText);
            }
        } else if ((dvalue1 + dvalue2 + dvalue5) % 10 === 0) {
            dealerP.innerText = dvalue3 + dvalue4;
            dpoints = parseInt(dealerP.innerText);

            if (dealerP.innerText % 10 === 0) {
                dealerP.innerText = "妞妞";
                dpoints = 10;
            }
            if (dealerP.innerText > 10) {
                dealerP.innerText -= 10;
                dpoints = parseInt(dealerP.innerText);
            }
        } else if ((dvalue1 + dvalue3 + dvalue4) % 10 === 0) {
            dealerP.innerText = dvalue2 + dvalue5;
            dpoints = parseInt(dealerP.innerText);

            if (dealerP.innerText % 10 === 0) {
                dealerP.innerText = "妞妞";
                dpoints = 10;
            }
            if (dealerP.innerText > 10) {
                dealerP.innerText -= 10;
                dpoints = parseInt(dealerP.innerText);
            }
        } else if ((dvalue1 + dvalue3 + dvalue5) % 10 === 0) {
            dealerP.innerText = dvalue2 + dvalue4;
            dpoints = parseInt(dealerP.innerText);

            if (dealerP.innerText % 10 === 0) {
                dealerP.innerText = "妞妞";
                dpoints = 10;
            }
            if (dealerP.innerText > 10) {
                dealerP.innerText -= 10;
                dpoints = parseInt(dealerP.innerText);
            }
        } else if ((dvalue1 + dvalue4 + dvalue5) % 10 === 0) {
            dealerP.innerText = dvalue2 + dvalue3;
            dpoints = parseInt(dealerP.innerText);

            if (dealerP.innerText % 10 === 0) {
                dealerP.innerText = "妞妞";
                dpoints = 10;
            }
            if (dealerP.innerText > 10) {
                dealerP.innerText -= 10;
                dpoints = parseInt(dealerP.innerText);
            }
        } else if ((dvalue2 + dvalue3 + dvalue4) % 10 === 0) {
            dealerP.innerText = dvalue1 + dvalue5;
            dpoints = parseInt(dealerP.innerText);

            if (dealerP.innerText % 10 === 0) {
                dealerP.innerText = "妞妞";
                dpoints = 10;
            }
            if (dealerP.innerText > 10) {
                dealerP.innerText -= 10;
                dpoints = parseInt(dealerP.innerText);
            }
        } else if ((dvalue2 + dvalue3 + dvalue5) % 10 === 0) {
            dealerP.innerText = dvalue1 + dvalue4;
            dpoints = parseInt(dealerP.innerText);

            if (dealerP.innerText % 10 === 0) {
                dealerP.innerText = "妞妞";
                dpoints = 10;
            }
            if (dealerP.innerText > 10) {
                dealerP.innerText -= 10;
                dpoints = parseInt(dealerP.innerText);
            }
        } else if ((dvalue2 + dvalue4 + dvalue5) % 10 === 0) {
            dealerP.innerText = dvalue1 + dvalue3;
            dpoints = parseInt(dealerP.innerText);

            if (dealerP.innerText % 10 === 0) {
                dealerP.innerText = "妞妞";
                dpoints = 10;
            }
            if (dealerP.innerText > 10) {
                dealerP.innerText -= 10;
                dpoints = parseInt(dealerP.innerText);
            }
        } else if ((dvalue3 + dvalue4 + dvalue5) % 10 === 0) {
            dealerP.innerText = dvalue1 + dvalue2;
            dpoints = parseInt(dealerP.innerText);

            if (dealerP.innerText % 10 === 0) {
                dealerP.innerText = "妞妞";
                dpoints = 10;
            }
            if (dealerP.innerText > 10) {
                dealerP.innerText -= 10;
                dpoints = parseInt(dealerP.innerText);
            }
        } else {
            dealerP.innerText = "烏龍";
            dpoints = 0;
        }

        // 判斷輸贏
        if (dpoints > ppoints) {
            alert("Dealer Win!");
            dealerWin();
        }
        if (dpoints < ppoints) {
            alert("Player Win!");
            playerWin();
        }
        if (dpoints === ppoints) {
            if (dList[4] > pList[4]) {
                alert("Dealer Win!");
                dealerWin();
            }
            if (dList[4] < pList[4] && psuits[4].slice(1) > 10) {
                alert("Player Win!");
                playerWin();
            }
            if ((dList[4] < pList[4] || dList[4] === pList[4]) && psuits[4].slice(1) <= 10) {
                alert("Dealer Win!");
                dealerWin();
            }
            if (dList[4] === pList[4] && psuits[4].slice(1) > 10) {
                if (dsuits[4].slice(1) > psuits[4].slice(1)) {
                    alert("Dealer Win!");
                    dealerWin();
                }
                if (dsuits[4].slice(1) < psuits[4].slice(1)) {
                    alert("Player Win!");
                    playerWin();
                }

                if (dsuits[4].slice(1) === psuits[4].slice(1)) {
                    let ds = dsuits[4].slice(0, 1);
                    let ps = psuits[4].slice(0, 1);
                    if (`suits.${ds}` > `suits.${ps}`) {
                        alert("Dealer Win!");
                        dealerWin();
                    } else {
                        alert("Player Win!");
                        playerWin();
                    }
                }
            }
        }
        openc.disabled = true;

        // 牌分兩堆


        // UPDATE
        axios.post("http://localhost:3001/niuniu/update", {
            moneyAfter: parseInt(point.innerText),
            result: result,
            dealerCards: `${dsuits[0]},${dsuits[1]},${dsuits[2]},${dsuits[3]},${dsuits[4]}`,
            playerCards: `${psuits[0]},${psuits[1]},${psuits[2]},${psuits[3]},${psuits[4]}`,
            status: `莊家:${dealerP.innerText} 玩家:${playerP.innerText} ${status}`
        }).then(function (e) {
            console.log(e);
        })
    }
}

restart.onclick = function () {
    // 自行判斷i到多少然後結束迴圈
    for (i = 1; i <= 5; i++) {
        document.getElementById(`dc${i}`).innerHTML = "";
        document.getElementById(`pc${i}`).innerHTML = "";
    }
    resetc.disabled = false;
    readyc.disabled = false;
    gameStart.disabled = false;
    openc.disabled = false;

    dpoints = 0;
    ppoints = 0;
    money.innerText = 0;
    gameReady = 0;
    sumMoney = [];
    sum = 0;
    playerP.innerText = 0;
    dealerP.innerText = 0;
    select = 0;
    total = 0;
    for (i = 1; i <= 5; i++) {
        var x = document.getElementById(`pc${i}`);
        x.style.bottom = "";
    }
    temp = [];
    dList = [];
    pList = [];
    dsuits = [];
    psuits = [];
    result = 0;
    reset();
}
