<template>
  <div @click.self="clickBackdrop" id="backdrop">
    <div id="box">
      <p>{{ moneyBag.account }}的錢包</p>
      <table>
        <tr>
          <td>遊戲</td>
          <td>金額</td>
          <td>提領</td>
          <td>儲值</td>
        </tr>
        <tr>
          <td>主錢包</td>
          <td>{{ moneyBag.main_balance }}</td>
          <td><button>提領</button></td>
          <td><button>儲值</button></td>
        </tr>
        <tr>
          <td>射龍門</td>
          <td>{{ moneyBag.sdd_balance }}</td>
          <td><button>提領</button></td>
          <td><button>儲值</button></td>
        </tr>
        <tr>
          <td>21點</td>
          <td>{{ moneyBag.blackjack_balance }}</td>
          <td><button>提領</button></td>
          <td><button>儲值</button></td>
        </tr>
        <tr>
          <td>捕魚機</td>
          <td>{{ moneyBag.fish_balance }}</td>
          <td><button>提領</button></td>
          <td><button>儲值</button></td>
        </tr>
        <tr>
          <td>老虎機</td>
          <td>{{ moneyBag.tiger_balance }}</td>
          <td><button>提領</button></td>
          <td><button>儲值</button></td>
        </tr>
        <tr>
          <td>撞球</td>
          <td>{{ moneyBag.billiard_balance }}</td>
          <td><button>提領</button></td>
          <td><button>儲值</button></td>
        </tr>
        <tr>
          <td>妞妞</td>
          <td>{{ moneyBag.niuniu_balance }}</td>
          <td><button>提領</button></td>
          <td><button>儲值</button></td>
        </tr>
        <tr>
          <td>百家樂</td>
          <td>{{ moneyBag.baccarat_balance }}</td>
          <td><button>提領</button></td>
          <td><button>儲值</button></td>
        </tr>
        <tr>
          <td>骰寶</td>
          <td>{{ moneyBag.dicegame_balance }}</td>
          <td><button>提領</button></td>
          <td><button>儲值</button></td>
        </tr>
      </table>
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
  background: white;
  width: 400px;
  margin-top: 100px;
  margin-left: 40%;
  /* height: 250px; */
}

table {
  border-collapse: collapse;
  text-align: center;
  display: block;
  padding-left: 30px;
}

th,
td {
  border-collapse: collapse;
  text-align: center;
  border: 1px solid rgb(51, 51, 51);
  padding: 10px;
  margin: 0;
}
</style>