//  準備撲克牌
//  1-1,準備花色
const pokerSuit = ["黑桃", "紅心", "方塊", "梅花",];
// console.log(pokerSuit);

//  1-2,準備 A 到 K
const pokerNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// console.log(pokerNum);

//  1-3.增加一個位置存放點數
const pokerPoint = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(pokerPoint);

const poker = [];
for (let i = 0; i < pokerSuit.length; i++) {
    // console.log(pokerSuit[i]);
    for (let j = 0; j < pokerNum.length; j++) {
        // console.log(pokerNum[j]);
        poker.push([pokerSuit[i], pokerNum[j], pokerPoint[j]]);
        // console.log('花色:', pokerSuit[i], '牌面:', pokerNum[j], '點數:', pokerPoint[j]);
        // console.log(pokerPoint[j]);
        // console.log([poker]);
        // console.log(poker.length);
    };
};

//把發牌做成一個 function
const sddFapa = function () {
    poker[Math.floor(Math.random() * poker.length)];
    // poker.splice(random, 1);
    // return poker[random];
};


sddStart.addEventListener("click", function () {
    // //產生第一張牌
    const bankPoker = poker[Math.floor(Math.random() * poker.length)];
    console.log('池底的牌：', bankPoker[2]);
    // console.log([poker]);


    // //產生第二張牌
    const sddPlayer_1 = poker[Math.floor(Math.random() * poker.length)];
    console.log('第二張：', sddPlayer_1[2]);
    // console.log([poker]);
    
    sddCallcard.addEventListener("click", function () {
        //產生第三張牌
        const sddPlayer_2 = poker[Math.floor(Math.random() * poker.length)];
        console.log('你的牌：', sddPlayer_2[2]);
        // console.log([poker]);
        // 第三張隨機的牌要介於 第一張跟第二張中間 就贏了 否則就輸了
        if (
            (bankPoker[2] < sddPlayer_2[2] && sddPlayer_2[2] < sddPlayer_1[2]) |
            (bankPoker[2] > sddPlayer_2[2] && sddPlayer_2[2] > sddPlayer_1[2])) {
            alert('過了');
        } else {
            alert('爆了');
        };
    
        // 判斷撞柱子
        if (sddPlayer_2[2] === sddPlayer_1[2] || sddPlayer_2[2] === bankPoker[2]) {
            alert('撞柱子囉')
        };
    });
})









