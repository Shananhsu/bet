<template>
  <div @click.self="clickBackdrop" id="backdrop">
    <div id="box">
      <!-- <p>{{ moneyBag.account }}的錢包</p> -->
      <table>
        <tr id="bag">
          <th colspan="9">會員 {{ moneyBag.account }}的錢包</th>
        </tr>
        <tr class="title">
          <th>主錢包</th>
          <th>射龍門</th>
          <th>21點</th>
          <th>捕魚機</th>
          <th>拉霸</th>
          <th>撞球</th>
          <th>妞妞</th>
          <th>百家樂</th>
          <th>骰寶</th>
        </tr>
        <tr class="content">
          <td><input type="text" :value="moneyBag.main_balance" /></td>
          <td><input type="text" :value="moneyBag.sdd_balance" /></td>
          <td><input type="text" :value="moneyBag.blackjack_balance" /></td>
          <td><input type="text" :value="moneyBag.fish_balance" /></td>
          <td><input type="text" :value="moneyBag.tiger_balance" />{{}}</td>
          <td><input type="text" :value="moneyBag.billiard_balance" /></td>
          <td><input type="text" :value="moneyBag.niuniu_balance" /></td>
          <td><input type="text" :value="moneyBag.baccarat_balance" /></td>
          <td><input type="text" :value="moneyBag.dicegame_balance" /></td>
          <!-- <td>{{moneyBag.main_balance}}</td>
          <td>{{ moneyBag.sdd_balance }}</td>
          <td>{{ moneyBag.blackjack_balance }}</td>
          <td>{{ moneyBag.fish_balance }}</td>
          <td>{{ moneyBag.tiger_balance }}</td>
          <td>{{ moneyBag.billiard_balance }}</td>
          <td>{{ moneyBag.niuniu_balance }}</td>
          <td>{{ moneyBag.baccarat_balance }}</td>
          <td>{{ moneyBag.dicegame_balance }}</td> -->
        </tr>
      </table>
      <div id="confirmation">
        <table>
          <tr class="title">
            <th class="confirmItem">待審核項目</th>
            <th class="confirmStatus">審核狀態</th>
          </tr>
          <tr class="content">
            <td class="confirmItem">暫無</td>
            <td class="confirmStatus">
              <select name="" id="">
                <option value="">待審核</option>
                <option value="">通過</option>
                <option value="">退回</option>
              </select>
            </td>
          </tr>
        </table>
        <button @click="renew">更新</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      moneyBag: [],
    };
  },
  methods: {
    clickBackdrop() {
      this.$emit("backdrop");
    },
    renew() {
      alert("更新成功");
      this.clickBackdrop();
    },
  },
  created() {
    axios
      .get("http://127.0.0.1:3001/backend/getThirdPartyMoney")
      .then((e) => {
        this.moneyBag = e.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
<style scoped>
#backdrop {
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
#box {
  width: 650px;
  margin-top: 100px;
  margin-left: 30%;
  /* background-color: #545a5f; */
  background-color: white;
  font-size: 10px;
  /* height: 45%; */
}

table {
  border-collapse: collapse;
  text-align: center;
  display: block;
  padding-left: 30px;
  padding-top: 20px;
  color: white;
}

th,
td {
  border-collapse: collapse;
  text-align: center;
  border: 1px solid #333333;
  padding: 10px;
  margin: 0;
  width: 45px;
}
#confirmation {
  padding-bottom: 20px;
}
.confirmItem {
  width: 450px;
}
.confirmStatus {
  width: 100px;
}
.title {
  background-color: rgb(113, 90, 197);
}
.content {
  background-color: #343a40;
}
#bag {
  background-color: #343a40;
}
input {
  width: 30px;
}
button {
  margin-top: 20px;
  /* margin-bottom: 10px; */
}
</style>