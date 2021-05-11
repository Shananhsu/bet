<template>
  <div id="member" v-if="report">
    <table>
      <tr id="title">
        <th>會員帳號</th>
        <th>會員姓名</th>
        <th>錢包餘額</th>
        <th>遊戲餘額</th>
        <th>會員電話</th>
        <th>會員Email</th>
        <th>會員地址</th>
        <th>註冊時間</th>
      </tr>
      <tr id="trla" v-for="item in memberInformation" :key="item">
        <td>{{ item.account }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.balance }}</td>
        <td><button @click="toggleModal">查看</button></td>
        <td>{{ item.phone }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.register_time }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["report"],
  data() {
    return {
      memberInformation: [],
    };
  },
  methods: {
    toggleModal() {
      this.$emit("toShowModal");
    },
  },
  created() {
    axios
      .get("http://127.0.0.1:3001/backend/member")
      .then((e) => {
        console.log(e.data);
        this.memberInformation = e.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
#member {
  background-color: #545a5f;
  position: absolute;
  display: inline-block;
  top: 9%;
  left: 15%;
  width: 85%;
  height: 91%;
  font-size: 10px;
  color: white;
}
table {
  border-collapse: collapse;
  text-align: center;
  overflow-x: auto;
  display: block;
  white-space: nowrap;
  margin-left: 18px;
  margin-top: 20px;
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
#title {
  background-color: #715ac5;
}
#trla {
  background-color: #343a40;
}
</style>