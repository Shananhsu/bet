//使用說明 打開註解 或關閉 啟動功能
//1.關閉重複出現的撲克牌 line => 42
let showNowtime = "";
//顯示時間
window.onload = showTime;
function showTime() {
  var NowDate = new Date();
  var d = NowDate.getDay();
  var dayNames = new Array(
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  );
  showNowtime = NowDate.toLocaleString() + " 【" + dayNames[d] + "】";
  document.getElementById("prentTime").innerHTML = showNowtime;
  // 更新頻率1000=每秒更新 500=每半秒更新
  setTimeout("showTime()", 500);
}

//準備撲克牌
// 中改英文 不然爆圖 0.0
const pokerSuit = ["Spades", "Heart", "Cube", "Plum"];
// console.log(pokerSuit);

//準備 A 到 K
const pokerNum = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
// console.log(pokerNum);

//點數準備
const pokerPoint = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(pokerPoint);

//存放組好的撲克牌
const poker = [];
// console.log(poker);

//存放第一張牌
const firstPoker = [];

//存放第二張牌
const secondPoker = [];

//存放第三張牌
const thirdPoker = [];

//會員錢包餘額(暫定)
let sddBetmoney = 10000;
let sddPostMoneyBefore = sddBetmoney;

//會員暱稱or會員帳號(暫定)
let sddPlayeyName = "Mepunk";

document.getElementById("sddUsermoney").value = sddBetmoney;
document.getElementById("sddUsermoney").innerHTML = `錢包餘額：${sddBetmoney}`;
// sddBetmoney = sddBetmoney - sddBettotal
// console.log(sddBetmoney)
// document.getElementById("sddUsermoney").innerHTML = `錢包餘額：${sddBetmoney}`
//上面條件組成一完整的撲克牌
for (let i = 0; i < pokerSuit.length; i++) {
  for (let j = 0; j < pokerNum.length; j++) {
    // console.log(pokerSuit);
    // console.log(pokerNum);
    poker.push([pokerSuit[i], pokerNum[j], pokerPoint[j]]);
    // console.log(pokerSuit[i], pokerNum[j], pokerPoint[j]);
  }
}

//點開始按鈕時 從poker陣列裡面 挑隨機挑出兩張牌
const sddFapa = function () {
  const random = Math.floor(Math.random() * poker.length);
  // poker.splice([random], 0);
  return poker[random];
  // console.log(random);
};
// sddFapa();
// console.log(poker);
// console.log("46行", poker); //// Array

//發牌順序 先發第一張 再發第二張
//存放到 firstPoker , thirdPoker
const gameStart = function () {
  sddBetmoney = sddBetmoney - 100;
  document.getElementById(
    "sddUsermoney"
  ).innerHTML = `錢包餘額：${sddBetmoney}`;
  sddBetsdd_total = sddBetsdd_total + 100;
  document.getElementById(
    "sddGamehistory_08"
  ).innerHTML = `射龍門累計投注金額： ${sddBetsdd_total}`;
  document.getElementById(
    "showBettotalarea_08"
  ).innerHTML = `射龍門：${sddBetsdd_total}`;
  sddBettotal = sddBettotal + 100;
  document.getElementById(
    "sddBetamount"
  ).innerHTML = `本局投注金額：${sddBettotal}`;
  document.getElementById("sddStart").style.display = "none";
  document.getElementById("sddCallcard").style.display = "block";
  // axios 要牌時
  axios.post("http://localhost:3001/dragonshoot/PostGameStart", {
    sddPostThisPlayerAccount: sddPlayeyName,
    sddPostProject: `龍門： ${sddBetsdd_total}`,
    sddPostBetMoney: sddBettotal,
    sddPostMoneyBefore: sddBetmoney + sddBetsdd_total,
    sddPostMoneyAfter: sddBetmoney,
    sddPostNowTime: showNowtime,
    sddPostGameType: gameType,
  });

  for (let i = 0; i < 2; i++) {
    if (i % 2 === 0) {
      // 每次執行清空上次執行結果
      // let firstPoker = [];

      const poke = sddFapa();
      firstPoker.push(poke);
      // document.getElementById("ans_1").innerText = `第一張：${firstPoker}`;
      document.getElementById(
        "showCrad_1"
      ).innerHTML = `<img src="./img/cards/${firstPoker}.png">`;
      // console.log(`第一張牌:${firstPoker}`);
    } else {
      // 每次執行清空上次執行結果
      // let secondPoker = [];

      const poke = sddFapa();
      secondPoker.push(poke);
      // document.getElementById("ans_2").innerText = `第二張：${secondPoker}`;
      document.getElementById(
        "showCrad_2"
      ).innerHTML = `<img src="./img/cards/${secondPoker}.png">`;
      // console.log(`第二張牌:${secondPoker}`);
      // 機率顯示
      if (firstPoker[0][2] < secondPoker[0][2]) {
        //射中機率顯示
        let sddWinp_1 = ((secondPoker[0][2] - firstPoker[0][2] - 1) / 13) * 100;
        document.getElementById("sddWinp").innerHTML = `射中：${Math.floor(
          sddWinp_1
        )}％`;
        //撞柱機率顯示
        let sddLosebig_1 = 15;
        document.getElementById("sddLosebig").innerHTML =
          "撞柱：" + sddLosebig_1 + "％";
        // console.log(Math.floor(p1))
        //顯示射偏機率
        let sddLosep_1 = 100 - Math.floor(sddWinp_1) - sddLosebig_1;
        document.getElementById("sddLosep").innerHTML =
          "射偏：" + sddLosep_1 + "％";
      } else if (firstPoker[0][2] > secondPoker[0][2]) {
        //射中機率顯示
        let sddWinp_2 = ((firstPoker[0][2] - secondPoker[0][2] - 1) / 13) * 100;
        document.getElementById("sddWinp").innerHTML = `射中：${Math.floor(
          sddWinp_2
        )}％`;
        //撞柱機率顯示
        let sddLosebig_1 = 15;
        document.getElementById("sddLosebig").innerHTML =
          "撞柱：" + sddLosebig_1 + "％";
        // console.log(Math.floor(p2))
        //顯示射偏機率
        let sddLosep_2 = 100 - Math.floor(sddWinp_2) - sddLosebig_1;
        document.getElementById("sddLosep").innerHTML =
          "射偏：" + sddLosep_2 + "％";
      } else if (firstPoker[0][2] === secondPoker[0][2]) {
        //射中機率顯示
        let sddWinp_3 = firstPoker[0][2] - secondPoker[0][2];
        document.getElementById("sddWinp").innerHTML = `射中：${Math.floor(
          sddWinp_3
        )}％`;
        //撞柱機率顯示
        let sddLosebig_1 = 15;
        document.getElementById("sddLosebig").innerHTML =
          "撞柱：" + sddLosebig_1 + "％";
        //顯示射偏機率
        let sddLosep_3 = 100 - Math.floor(sddWinp_3) - sddLosebig_1;
        document.getElementById("sddLosep").innerHTML =
          "射偏：" + sddLosep_3 + "％";
      }
    }
  }
  //axios
};

// gameStart();
// console.log(firstPoker)
// console.log(secondPoker)
// console.log(firstPoker[0][2])
// console.log(secondPoker[0][2])
// console.log(typeof firstPoker)
// console.log(typeof secondPoker)
//輸出物件
// Probability();

// 紀錄本局,的累計投注金額
let sddBettotal = 0;

// 紀錄黑桃,的累計投注金額
let sddSpades_total = 0;

// 紀錄大,的累計投注金額
let sddBetbig_total = 0;

// 紀錄幸運7,的累計投注金額
let sddBet7_total = 0;

// 紀錄小,的累計投注金額
let sddBetsmall_total = 0;

// 紀錄愛心,的累計投注金額
let sddHeart_total = 0;

// 紀錄方塊,的累計投注金額
let sddCube_total = 0;

// 紀錄單數,的累計投注金額
let sddBetodd_total = 0;

// 紀錄射龍門,的累計投注金額
let sddBetsdd_total = 0;

// 紀錄雙數,的累計投注金額
let sddBeteven_total = 0;

// 紀錄梅花,的累計投注金額
let sddPlum_total = 0;

// 點擊50元籌碼時 投注區域的值都變更為50
sddBet50.addEventListener("click", function () {
  document.getElementById("sddSpades").value = 50;
  document.getElementById("sddBetbig").value = 50;
  document.getElementById("sddBet7").value = 50;
  document.getElementById("sddBetsmall").value = 50;
  document.getElementById("sddHeart").value = 50;
  document.getElementById("sddCube").value = 50;
  document.getElementById("sddBetodd").value = 50;
  document.getElementById("sddBetsdd").value = 50;
  document.getElementById("sddBeteven").value = 50;
  document.getElementById("sddPlum").value = 50;
  // console.log("選定籌碼50");
  document.getElementById("sddBet50").style.marginTop="0px"
  document.getElementById("sddBet100").style.marginTop="55px"
  document.getElementById("sddBet500").style.marginTop="55px"
  document.getElementById("sddBet1000").style.marginTop="55px"
  document.getElementById("sddBet5000").style.marginTop="55px"
});

// 點擊100元籌碼時 投注區域的值都變更為100
sddBet100.addEventListener("click", function () {
  document.getElementById("sddSpades").value = 100;
  document.getElementById("sddBetbig").value = 100;
  document.getElementById("sddBet7").value = 100;
  document.getElementById("sddBetsmall").value = 100;
  document.getElementById("sddHeart").value = 100;
  document.getElementById("sddCube").value = 100;
  document.getElementById("sddBetodd").value = 100;
  document.getElementById("sddBetsdd").value = 100;
  document.getElementById("sddBeteven").value = 100;
  document.getElementById("sddPlum").value = 100;
  // console.log("選定籌碼100");
  document.getElementById("sddBet50").style.marginTop="55px"
  document.getElementById("sddBet100").style.marginTop="0px"
  document.getElementById("sddBet500").style.marginTop="55px"
  document.getElementById("sddBet1000").style.marginTop="55px"
  document.getElementById("sddBet5000").style.marginTop="55px"
});

// 點擊500元籌碼時 投注區域的值都變更為500
sddBet500.addEventListener("click", function () {
  document.getElementById("sddSpades").value = 500;
  document.getElementById("sddBetbig").value = 500;
  document.getElementById("sddBet7").value = 500;
  document.getElementById("sddBetsmall").value = 500;
  document.getElementById("sddHeart").value = 500;
  document.getElementById("sddCube").value = 500;
  document.getElementById("sddBetodd").value = 500;
  document.getElementById("sddBetsdd").value = 500;
  document.getElementById("sddBeteven").value = 500;
  document.getElementById("sddPlum").value = 500;
  // console.log("選定籌碼500");
  document.getElementById("sddBet50").style.marginTop="55px"
  document.getElementById("sddBet100").style.marginTop="55px"
  document.getElementById("sddBet500").style.marginTop="0px"
  document.getElementById("sddBet1000").style.marginTop="55px"
  document.getElementById("sddBet5000").style.marginTop="55px"
});

// 點擊1000元籌碼時 投注區域的值都變更為1000
sddBet1000.addEventListener("click", function () {
  document.getElementById("sddSpades").value = 1000;
  document.getElementById("sddBetbig").value = 1000;
  document.getElementById("sddBet7").value = 1000;
  document.getElementById("sddBetsmall").value = 1000;
  document.getElementById("sddHeart").value = 1000;
  document.getElementById("sddCube").value = 1000;
  document.getElementById("sddBetodd").value = 1000;
  document.getElementById("sddBetsdd").value = 1000;
  document.getElementById("sddBeteven").value = 1000;
  document.getElementById("sddPlum").value = 1000;
  // console.log("選定籌碼1000");
  document.getElementById("sddBet50").style.marginTop="55px"
  document.getElementById("sddBet100").style.marginTop="55px"
  document.getElementById("sddBet500").style.marginTop="55px"
  document.getElementById("sddBet1000").style.marginTop="0px"
  document.getElementById("sddBet5000").style.marginTop="55px"
});

// 點擊5000元籌碼時 投注區域的值都變更為5000
sddBet5000.addEventListener("click", function () {
  document.getElementById("sddSpades").value = 5000;
  document.getElementById("sddBetbig").value = 5000;
  document.getElementById("sddBet7").value = 5000;
  document.getElementById("sddBetsmall").value = 5000;
  document.getElementById("sddHeart").value = 5000;
  document.getElementById("sddCube").value = 5000;
  document.getElementById("sddBetodd").value = 5000;
  document.getElementById("sddBetsdd").value = 5000;
  document.getElementById("sddBeteven").value = 5000;
  document.getElementById("sddPlum").value = 5000;
  // console.log("選定籌碼5000");
  document.getElementById("sddBet50").style.marginTop="55px"
  document.getElementById("sddBet100").style.marginTop="55px"
  document.getElementById("sddBet500").style.marginTop="55px"
  document.getElementById("sddBet1000").style.marginTop="55px"
  document.getElementById("sddBet5000").style.marginTop="0px"
});

// 點擊黑桃,投注區域時,將值累加存到,sddSpades_total
sddSpades.addEventListener("click", function () {
  if (sddBetmoney > 0) {
    sddSpades_total =
      sddSpades_total + document.getElementById("sddSpades").value;
    getBettotal();
    document.getElementById(
      "sddGamehistory_01"
    ).innerHTML = `黑桃累計投注金額： ${sddSpades_total}`;
    document.getElementById(
      "showBettotalarea_01"
    ).innerHTML = `黑桃：${sddSpades_total}`;
    // console.log(`黑桃累計投注金額： ${sddSpades_total}`);
  } else if (sddBetmoney <= 0) {
    alert("餘額不足");
  }
});

// 點擊大,投注區域時,將值累加存到,sddSpades_total
sddBetbig.addEventListener("click", function () {
  if (sddBetmoney > 0) {
    sddBetbig_total =
      sddBetbig_total + document.getElementById("sddBetbig").value;
    getBettotal();
    document.getElementById(
      "sddGamehistory_02"
    ).innerHTML = `大累計投注金額： ${sddBetbig_total}`;
    document.getElementById(
      "showBettotalarea_02"
    ).innerHTML = `大點：${sddBetbig_total}`;
    // console.log(`大累計投注金額： ${sddBetbig_total}`);
  } else if (sddBetmoney <= 0) {
    alert("餘額不足");
  }
});

// 點擊幸運7,投注區域時,將值累加存到,sddBet7_total
sddBet7.addEventListener("click", function () {
  if (sddBetmoney > 0) {
    sddBet7_total = sddBet7_total + document.getElementById("sddBet7").value;
    getBettotal();
    document.getElementById(
      "sddGamehistory_03"
    ).innerHTML = `幸運7累計投注金額： ${sddBet7_total}`;
    document.getElementById(
      "showBettotalarea_03"
    ).innerHTML = `Lucky 7：${sddBet7_total}`;
    // console.log(`幸運7累計投注金額： ${sddBet7_total}`);
  } else if (sddBetmoney <= 0) {
    alert("餘額不足");
  }
});

// 點擊小,投注區域時,將值累加存到,sddBetsmall_total
sddBetsmall.addEventListener("click", function () {
  if (sddBetmoney > 0) {
    sddBetsmall_total =
      sddBetsmall_total + document.getElementById("sddBetsmall").value;
    getBettotal();
    document.getElementById(
      "sddGamehistory_04"
    ).innerHTML = `小累計投注金額： ${sddBetsmall_total}`;
    document.getElementById(
      "showBettotalarea_04"
    ).innerHTML = `小點：${sddBetsmall_total}`;
    // console.log(`小累計投注金額： ${sddBetsmall_total}`);
  } else if (sddBetmoney <= 0) {
    alert("餘額不足");
  }
});

// 點擊紅心,投注區域時,將值累加存到,sddBetsmall_total
sddHeart.addEventListener("click", function () {
  if (sddBetmoney > 0) {
    sddHeart_total = sddHeart_total + document.getElementById("sddHeart").value;
    getBettotal();
    document.getElementById(
      "sddGamehistory_05"
    ).innerHTML = `愛心累計投注金額： ${sddHeart_total}`;
    document.getElementById(
      "showBettotalarea_05"
    ).innerHTML = `愛心：${sddHeart_total}`;
    // console.log(`愛心累計投注金額： ${sddHeart_total}`);
  } else if (sddBetmoney <= 0) {
    alert("餘額不足");
  }
});

// 點擊方塊,投注區域時,將值累加存到,sddCube_total
sddCube.addEventListener("click", function () {
  if (sddBetmoney > 0) {
    sddCube_total = sddCube_total + document.getElementById("sddCube").value;
    getBettotal();
    document.getElementById(
      "sddGamehistory_06"
    ).innerHTML = `方塊累計投注金額： ${sddCube_total}`;
    document.getElementById(
      "showBettotalarea_06"
    ).innerHTML = `方塊：${sddCube_total}`;
    // console.log(`方塊累計投注金額： ${sddCube_total}`);
  } else if (sddBetmoney <= 0) {
    alert("餘額不足");
  }
});

// 點擊單,投注區域時,將值累加存到,sddBetodd_total
sddBetodd.addEventListener("click", function () {
  if (sddBetmoney > 0) {
    sddBetodd_total =
      sddBetodd_total + document.getElementById("sddBetodd").value;
    getBettotal();
    document.getElementById(
      "sddGamehistory_07"
    ).innerHTML = `單數累計投注金額： ${sddBetodd_total}`;
    document.getElementById(
      "showBettotalarea_07"
    ).innerHTML = `單數：${sddBetodd_total}`;
    // console.log(`單數累計投注金額： ${sddBetodd_total}`);
  } else if (sddBetmoney <= 0) {
    alert("餘額不足");
  }
});

// 點擊射龍門,投注區域時,將值累加存到,sddBetsdd_total
sddBetsdd.addEventListener("click", function () {
  if (sddBetmoney > 0) {
    sddBetsdd_total =
      sddBetsdd_total + document.getElementById("sddBetsdd").value;
    getBettotal();
    document.getElementById(
      "sddGamehistory_08"
    ).innerHTML = `射龍門累計投注金額： ${sddBetsdd_total}`;
    document.getElementById(
      "showBettotalarea_08"
    ).innerHTML = `射龍門：${sddBetsdd_total}`;
    // console.log(`射龍門累計投注金額： ${sddBetsdd_total}`);
  } else if (sddBetmoney <= 0) {
    alert("餘額不足");
  }
});

// 點擊雙,投注區域時,將值累加存到,sddBeteven_total
sddBeteven.addEventListener("click", function () {
  if (sddBetmoney > 0) {
    sddBeteven_total =
      sddBeteven_total + document.getElementById("sddBeteven").value;
    getBettotal();
    document.getElementById(
      "sddGamehistory_09"
    ).innerHTML = `雙數累計投注金額： ${sddBeteven_total}`;
    document.getElementById(
      "showBettotalarea_09"
    ).innerHTML = `雙數：${sddBeteven_total}`;
    // console.log(`雙數累計投注金額： ${sddBeteven_total}`);
  } else if (sddBetmoney <= 0) {
    alert("餘額不足");
  }
});

// 點擊梅花,投注區域時,將值累加存到,
sddPlum.addEventListener("click", function () {
  if (sddBetmoney > 0) {
    sddPlum_total = sddPlum_total + document.getElementById("sddPlum").value;
    getBettotal();
    document.getElementById(
      "sddGamehistory_10"
    ).innerHTML = `梅花累計投注金額： ${sddPlum_total}`;
    document.getElementById(
      "showBettotalarea_10"
    ).innerHTML = `梅花：${sddPlum_total}`;
    // console.log(`梅花累計投注金額： ${sddPlum_total}`);
  } else if (sddBetmoney <= 0) {
    alert("餘額不足");
  }
});

// 本局餘額計算
const getBettotal = function () {
  // 取得本局累計的投注金額
  sddBettotal =
    sddSpades_total +
    sddBetbig_total +
    sddBet7_total +
    sddBetsmall_total +
    sddHeart_total +
    sddCube_total +
    sddBetodd_total +
    sddBetsdd_total +
    sddBeteven_total +
    sddPlum_total;
  document.getElementById(
    "sddBetamount"
  ).innerHTML = `本局投注金額：${sddBettotal}`;
  sddBetmoney = document.getElementById("sddUsermoney").value - sddBettotal;
  document.getElementById(
    "sddUsermoney"
  ).innerHTML = `錢包餘額：${sddBetmoney}`;
};

// 存放射龍門中獎結果
let sddSddEnd = [];

//射龍門_遊戲結果判斷
const sddBetsdd_WL = function () {
  if (
    (firstPoker[0][2] < thirdPoker[0][2] &&
      thirdPoker[0][2] < secondPoker[0][2]) ||
    (firstPoker[0][2] > thirdPoker[0][2] &&
      thirdPoker[0][2] > secondPoker[0][2])
  ) {
    // 賠率計算
    sddBetmoney = sddBetsdd_total * 2 + sddBetmoney;
    document.getElementById(
      "sddUsermoney"
    ).innerHTML = `錢包餘額：${sddBetmoney}`;
    sddSddEnd.push("射過");
    document.getElementById("sddShowGameHistory_02").innerHTML = "射龍門：射中";
  } else if (
    firstPoker[0][2] === thirdPoker[0][2] ||
    thirdPoker[0][2] === secondPoker[0][2]
  ) {
    //   撞柱子輸加倍
    // sddBetmoney = sddBetmoney - sddBetsdd_total;
    sddSddEnd.push("沒射過");
    document.getElementById("sddShowGameHistory_02").innerHTML =
      "射龍門：沒射中";
  } else {
    sddSddEnd.push("沒射過");
    document.getElementById("sddShowGameHistory_02").innerHTML =
      "射龍門：沒射中";
  }
};
// 存放花色中獎結果
let sddBetsuitEnd = [];

// 花色_遊戲結果判斷
const sddBetsuit = function () {
  if (thirdPoker[0][0] === "黑桃") {
    sddBetmoney = sddSpades_total * 3.95 + sddBetmoney;
    document.getElementById(
      "sddUsermoney"
    ).innerHTML = `錢包餘額：${sddBetmoney}`;
    // alert("中黑桃");
    sddBetsuitEnd.push("黑桃");
    document.getElementById("sddShowGameHistory_03").innerHTML =
      "中獎花色：黑桃";
  } else if (thirdPoker[0][0] === "紅心") {
    sddBetmoney = sddHeart_total * 3.95 + sddBetmoney;
    document.getElementById(
      "sddUsermoney"
    ).innerHTML = `錢包餘額：${sddBetmoney}`;
    // alert("中紅心");
    sddBetsuitEnd.push("紅心");
    document.getElementById("sddShowGameHistory_03").innerHTML =
      "中獎花色：紅心";
  } else if (thirdPoker[0][0] === "方塊") {
    sddBetmoney = sddCube_total * 3.95 + sddBetmoney;
    document.getElementById(
      "sddUsermoney"
    ).innerHTML = `錢包餘額：${sddBetmoney}`;
    // alert("中方塊");
    sddBetsuitEnd.push("方塊");
    document.getElementById("sddShowGameHistory_03").innerHTML =
      "中獎花色：方塊";
  } else if (thirdPoker[0][0] === "梅花") {
    sddBetmoney = sddPlum_total * 3.95 + sddBetmoney;
    document.getElementById(
      "sddUsermoney"
    ).innerHTML = `錢包餘額：${sddBetmoney}`;
    // alert("中梅花");
    sddBetsuitEnd.push("梅花");
    document.getElementById("sddShowGameHistory_03").innerHTML =
      "中獎花色：梅花";
  }
};
// 存放大小中獎結果
let sddBetBSEnd = [];

// 大小_遊戲結果判斷
const sddBetBigSmall = function () {
  if (thirdPoker[0][2] < 7) {
    sddBetmoney = sddBetsmall_total * 1.95 + sddBetmoney;
    document.getElementById(
      "sddUsermoney"
    ).innerHTML = `錢包餘額：${sddBetmoney}`;
    // alert("中小");
    sddBetBSEnd.push("中小");
    document.getElementById("sddShowGameHistory_04").innerHTML =
      "中獎大小：中小";
  } else if (thirdPoker[0][2] > 7) {
    sddBetmoney = sddBetbig_total * 1.95 + sddBetmoney;
    document.getElementById(
      "sddUsermoney"
    ).innerHTML = `錢包餘額：${sddBetmoney}`;
    // alert("中大");
    sddBetBSEnd.push("中大");
    document.getElementById("sddShowGameHistory_04").innerHTML =
      "中獎大小：中大";
  }
};
// 存放幸運七中獎結果
let sddLucky7End = [];

// 幸運7_遊戲結果判斷
const sddBetsdd7 = function () {
  if (thirdPoker[0][2] === 7) {
    sddBetmoney = sddBet7_total * 10.5 + sddBetmoney;
    document.getElementById(
      "sddUsermoney"
    ).innerHTML = `錢包餘額：${sddBetmoney}`;
    alert("中幸運7");
    sddLucky7End.push("LUCKY 7");
    document.getElementById("sddShowGameHistory_01").innerHTML =
      "Lucky 7：中大獎！";
  } else {
    sddLucky7End.push("沒中");
    document.getElementById("sddShowGameHistory_01").innerHTML =
      "Lucky 7：沒中";
  }
};

// 存放單雙中獎結果
let sddBetOddEvenEnd = [];

// 單雙_遊戲結果判斷
const sddBetoddeven = function () {
  // 第三張牌為雙數
  if (thirdPoker[0][2] % 2 === 0) {
    sddBetmoney = sddBeteven_total * 1.85 + sddBetmoney;
    document.getElementById(
      "sddUsermoney"
    ).innerHTML = `錢包餘額：${sddBetmoney}`;
    // alert("中雙");
    sddBetOddEvenEnd.push("中雙");
    document.getElementById("sddShowGameHistory_05").innerHTML =
      "中獎單雙：開雙數";
  } else if (thirdPoker[0][2] % 2 === 1) {
    sddBetmoney = sddBetodd_total * 1.95 + sddBetmoney;
    document.getElementById(
      "sddUsermoney"
    ).innerHTML = `錢包餘額：${sddBetmoney}`;
    // alert("中單");
    sddBetOddEvenEnd.push("中單");
    document.getElementById("sddShowGameHistory_05").innerHTML =
      "中獎單雙：開單數";
  }
};

//打開第三張牌
const gamePK = function () {
  // 清空陣列
  // let thirdPoker = [];
  // 執行發牌
  const poke = sddFapa();
  thirdPoker.push(poke);
  // document.getElementById("ans_3").innerText = `你的牌：${thirdPoker}`;
  document.getElementById(
    "showCrad_3"
  ).innerHTML = `<img src="./img/cards/${thirdPoker}.png">`;
  // console.log(`第三張牌：${thirdPoker}`);
  document.getElementById("sddCallcard").style.display = "none";
  document.getElementById("sddGiveup").style.display = "block";
  // 射龍門遊戲結果判斷函式
  sddBetsdd_WL();
  // 猜花色遊戲結果判斷函示
  sddBetsuit();
  // 猜大小遊戲結果判斷函示
  sddBetBigSmall();
  // 幸運七遊戲結果判斷函示
  sddBetsdd7();
  // 單雙數遊戲結果判斷函示
  sddBetoddeven();

  // axios
  axios.post("http://localhost:3001/dragonshoot/getGamehistory", {
    // 本局投注項目以及金額
    sddPostProject: `
      黑桃： ${sddSpades_total},
      大點： ${sddBetbig_total},
      中七： ${sddBet7_total},
      小點： ${sddBetsmall_total},
      愛心： ${sddHeart_total},
      方塊： ${sddCube_total},
      單數： ${sddBetodd_total},
      龍門： ${sddBetsdd_total},
      雙數： ${sddBeteven_total},
      梅花： ${sddPlum_total},`,
    // 累計投注金額
    sddPostBetMoney: sddBettotal,
    // 本局遊戲後餘額
    sddPostMoneyAfter: sddBetmoney,
    // 輸贏金額
    sddPostBetResult: sddBetmoney - sddPostMoneyBefore,
    //中獎資訊
    sddPostGameResult: `幸運七：${sddLucky7End},
                        射龍門：${sddSddEnd},
                        中獎花色：${sddBetsuitEnd},
                        中獎大小：${sddBetBSEnd},
                        中獎單雙：${sddBetOddEvenEnd},`,
  });
};

// const playNext = function() {
//     document.getElementById("showCrad_1").innerHTML = '<img src="./img/cards/bc1.jpg">'
//     document.getElementById("showCrad_3").innerHTML = '<img src="./img/cards/bc1.jpg">'
//     document.getElementById("showCrad_2").innerHTML = '<img src="./img/cards/bc1.jpg">'
//         // delete firstPoker[0]
//         // delete secondPoker[0]
//         // delete thirdPoker[0]
//         // console.log(`第一張牌:${firstPoker}`);
//         // console.log(`第二張牌:${secondPoker}`);
//         // console.log(`第三張牌:${thirdPoker}`);
// };

//控制按鈕
// 開始遊戲 發兩張牌
sddStart.addEventListener("click", gameStart);
// 發第三張牌並且判定輸贏值
sddCallcard.addEventListener("click", gamePK);
// 開始下一局清空結果
// sddNextbet.addEventListener("click", playNext);
