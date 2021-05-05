<template>
  <div id="content">
    <!-- <p id="head" v-if="bool">財務報表 / 代理{{}}的會員 / 會員{{}}的明細</p> -->
    <div id="totalBet" v-if="closeGame">
      <p>總注單數量</p>
      <p>{{ count }}</p>
    </div>
    <div id="totalMoney" v-if="closeGame">
      <p>總下注金額</p>
      <p>{{ amount }}</p>
    </div>
    <div></div>
    <div id="tables">
      <table id="firstT" v-if="bool">
        <tr class="title">
          <th>會員帳號</th>
          <th>姓名</th>
          <th>注單數量</th>
          <th>總下注金額</th>
          <th>總輸贏金額</th>
          <th>會員注單明細</th>
        </tr>
        <tr class="trhover" v-for="item in player" :key="item">
          <td>{{ item.account }}</td>
          <td>{{ item.name }}</td>
          <td>{{ count }}</td>
          <td>{{ amount }}</td>
          <td :class="[results > 0 ? 'red' : 'green']">{{ results }}</td>
          <td><button @click="showGameData">前往</button></td>
        </tr>
      </table>
      <table id="secondT" v-if="closeGame">
        <tr class="title">
          <th>下注時間</th>
          <th>注單編號</th>
          <th>投注館別</th>
          <th>投注項目</th>
          <th>投注金額</th>
          <th>遊戲前金額</th>
          <th>遊戲結果</th>
          <th>會員輸贏</th>
          <th>遊戲後金額</th>
        </tr>
        <tr class="trhover" v-for="items in gameData" :key="items">
          <td>{{ items.betTime }}</td>
          <td>{{ items.id }}</td>
          <td>{{ items.gameType }}</td>
          <td>{{ items.object }}</td>
          <td>{{ items.bets }}</td>
          <td>{{ items.moneyBefore }}</td>
          <td>{{ items.status }}</td>
          <td :class="[items.result > 0 ? 'red' : 'green']">
            {{ items.result }}
          </td>
          <td>{{ items.moneyAfter }}</td>
        </tr>
      </table>
    </div>
    <!-- <button v-if="closeGame" @click="reset">重選</button> -->
  </div>
</template>

<script>
export default {
  props: ["bool", "closeGame"],
  data() {
    return {
      showPlayerData: false,
      player: [],
      amount: 0,
      count: 0,
      results: [],
      gameData: [],
    };
  },
  watch: {
    bool() {
      // get會員帳號跟名字
      axios
        .get("http://127.0.0.1:3001/backend/getMember")
        .then((e) => {
          console.log(e.data, "account");
          this.player = e.data;
        })
        .catch((err) => {
          console.log(err);
        });
      // get總下注金額
      axios
        .get("http://127.0.0.1:3001/backend/getTotalBets")
        .then((e) => {
          console.log(e.data, "amount");
          this.amount = e.data;
        })
        .catch((err) => {
          console.log(err);
        });
      // get注單數量
      axios
        .get("http://127.0.0.1:3001/backend/getCount")
        .then((e) => {
          console.log(e.data, "count");
          this.count = e.data;
        })
        .catch((err) => {
          console.log(err);
        });
      // get總輸贏金額
      axios
        .get("http://127.0.0.1:3001/backend/getResults")
        .then((e) => {
          console.log(e.data, "results");
          this.results = e.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  methods: {
    // 點擊前往按鈕
    showGameData() {
      // this.showGame = true;
      this.$emit("close", this.showPlayerData);
      // get選取的遊戲
      axios
        .get("http://127.0.0.1:3001/backend/fetchGame")
        .then((e) => {
          console.log(e);
          this.gameData = e.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    reset() {
      window.location.href = "/";
    },
  },
};
</script>

<style scoped>
#content {
  background-color: #545a5f;
  position: absolute;
  display: inline-block;
  top: 9%;
  left: 30%;
  width: 70%;
  height: 91%;
  overflow: auto;
  font-size: 10px;
  color: white;
}
#firstT {
  width: 51.5%;
  background-color: #343a40;
}
#secondT {
  width: 98%;
  background-color: #343a40;
}
#tables {
  /* background-color: #343a40; */
  margin-left: 18px;
  margin-top: 20px;
  /* width: 96%; */
  text-align: center;
  overflow-y: auto;
  height: 67%;
}
#head {
  margin-left: 20px;
  color: rgb(150, 122, 252);
}
#totalBet {
  margin-top: 20px;
  margin-left: 20px;
  background-color: rgb(199, 147, 50);
  width: 150px;
  text-align: center;
  display: inline-block;
  height: 50px;
  line-height: 10px;
}
#totalMoney {
  margin-top: 20px;
  margin-left: 20px;
  background-color: rgb(63, 63, 207);
  width: 150px;
  text-align: center;
  display: inline-block;
  height: 50px;
  line-height: 10px;
}
.title {
  background-color: rgb(113, 90, 197);
}
table {
  border-collapse: collapse;
  text-align: center;
  width: 100%;
  overflow-x: auto;
  display: block;
  white-space: nowrap;
}

th,
td {
  border-collapse: collapse;
  text-align: center;
  border: 1px solid rgb(51, 51, 51);
  padding: 10px;
  margin: 0;
}

.trhover:hover {
  background-color: rgba(92, 97, 156, 0.493);
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>