const suit = [
  "梅花",
  "愛心",
  "方塊",
  "黑桃",
  "梅花",
  "愛心",
  "方塊",
  "黑桃",
  "梅花",
  "愛心",
  "方塊",
  "黑桃",
  "梅花",
  "愛心",
  "方塊",
  "黑桃"
];
const number = [
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
  "K"
];
const point = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

const poker = [];
console.log(poker)
const player = [];
const bank = [];

for (let i = 0; i < suit.length; i++) {
  for (let j = 0; j < number.length; j++) {
    poker.push([suit[i], number[j], point[j]]);
  }
}

const fapa = function () {
  // 0 - 207
  const random = Math.floor(Math.random() * poker.length);
  poker.splice(random, 1);
  return poker[random];
};


const getSum = function (poker) {
  return poker.reduce((acc, cur) => {
    return acc + cur[2];
  }, 0);
};

const getPoint = function (sum) {
  return sum % 10;
};

const gameStart = function () {
  for (let i = 0; i < 4; i++) {
    if (i % 2 === 0) {
      const poke = fapa();
      // console.log(`玩家拿到牌: ${poke}`)
      player.push(poke);
    } else {
      const poke = fapa();
      // console.log(`莊家拿到牌: ${poke}`)
      bank.push(poke);
    }
  }

  console.log(`玩家: ${player}`);

  const playerSum = getSum(player);
  const playerPoint = getPoint(playerSum);

  console.log(`玩家總和: ${playerSum}`);
  console.log(`玩家點數: ${playerPoint}`);

  if (playerPoint < 6) {
    // 玩家點數小於6，要補牌
    player.push(fapa());
    console.log(`玩家補牌, 補牌後: ${player}`);
    console.log(`玩家新的點數 ${getPoint(getSum(player))}`);
  }
  if (playerPoint === 8) {
    alert('play 8 point')
  }

  if (playerPoint === 9) {
    alert('play 9 point')
  }

  if (playerPoint === 7) {
    alert('play 7 point')
  }

  if (playerPoint === 6) {
    alert('play 6 point')
  }

  console.log(`莊家: ${bank}`)
};

btn.addEventListener("click", gameStart);


  // 指向
