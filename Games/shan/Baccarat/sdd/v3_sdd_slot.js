//準備撲克牌
const pokerSuit = ["黑桃", "紅心", "方塊", "梅花"];
// console.log(pokerSuit);

//準備 A 到 K
const pokerNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// console.log(pokerNum);

//點數準備
const pokerPoint = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(pokerPoint);

//存放組好的撲克牌
const poker = [];
console.log(poker.length);

//存放第一張牌
const firstPoker = [];
//存放第二張牌
const secondPoker = [];
//存放第三張牌
const thirdPoker = [];

//上面條件組成一完整的撲克牌
for (let i = 0; i < pokerSuit.length; i++) {
    for (let j = 0; j < pokerNum.length; j++) {
        // console.log(pokerSuit);
        // console.log(pokerNum);
        poker.push([pokerSuit[i], pokerNum[j], pokerPoint[j]])
        // console.log(pokerSuit[i],pokerNum[j],pokerPoint[j]);
    };
};

//點開始按鈕時 從poker陣列裡面 挑隨機挑出兩張牌
//存放到 firstPoker , thirdPoker
// 計畫a_________________________________________
const sddFapa = function () {
    const random = Math.floor(Math.random() * 13 + 1);
    // console.log(random);
    return random
};

const gameStart = function () {
    for (let i = 0; i < 2; i++) {
        if (i % 2 === 0) {
            const poke = sddFapa();
            firstPoker.push(poke);
            document.getElementById("ans_1").innerText = firstPoker
            // console.log(`第一張牌:${firstPoker}`)
        } else {
            const poke = sddFapa();
            secondPoker.push(poke);
            document.getElementById("ans_2").innerText = secondPoker
            // console.log(`第二張牌:${secondPoker}`)
            // console.log(typeof secondPoker)
        };
    };
};

const gamePK = function () {
    const poke = sddFapa();
    thirdPoker.push(poke);
    document.getElementById("ans_3").innerText = thirdPoker;
    // console.log(`決勝牌:${thirdPoker}`);
    // console.log(thirdPoker[0])
    // console.log(typeof(thirdPoker[0]))
    if ((firstPoker < thirdPoker && thirdPoker < secondPoker) ||
        (firstPoker > thirdPoker && thirdPoker > secondPoker)) {
        document.getElementById("winloseLA").innerText = "過"
    } else if (firstPoker === thirdPoker || thirdPoker === secondPoker) {
        document.getElementById("winloseLA").innerText = "撞柱子"
    } else {
        document.getElementById("winloseLA").innerText = "爆炸"
    }
}
//控制按鈕
sddStart.addEventListener("click", gameStart);
sddCallcard.addEventListener("click", gamePK);

//判斷
// console.log(thirdPoker === secondPoker)
// console.log(thirdPoker < secondPoker)
// console.log(thirdPoker > secondPoker)
