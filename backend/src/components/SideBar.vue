<template>
  <div id="sideBar">
    <img id="img" src="../assets/OMOG.png" alt="" />
    <p id="player">Admin Account: {{ account }}</p>
    <button class="sideBtn" @click="report">報表管理</button>
    <button class="sideBtn" @click="member">會員管理</button>
  </div>
</template>

<script>
export default {
  props: ["account"],
  methods: {
    report() {
      this.$emit("clickReport", false);
    },
    member() {
      this.$emit("clickMember", true);
    },
  },
};
</script>
<style scoped>
#img {
  width: 80px;
  height: 80px;
}
#sideBar {
  width: 15%;
  height: 100vh;
  display: inline-block;
  background-color: #6c757d;
  text-align: center;
  color: white;
}
.sideBtn {
  width: 150px;
  margin-top: 10px;
  width: 100%;
}
.sideBtn:hover {
  background-color: rgb(158, 158, 158);
}
</style>