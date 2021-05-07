<template>
  <div id="top">
    <div id="logo">尊敬的代理商您好</div>
    <div id="time">{{ time }}</div>
    <div id="log"><button class="btn" @click="Logout">登出</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
    };
  },
  created() {
    setInterval(() => {
      this.time = new Date().toLocaleString();
    }, 1000);
  },
  methods: {
    Logout() {
      this.$emit("logout", true);
      axios
        .get("http://127.0.0.1:3001/backend/logout")
        .then((e) => {
          console.log(e);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
#top {
  position: absolute;
  width: 85%;
  height: 9%;
  background-color: #2962ff;
  display: inline-block;
  color: white;
}
#top > div {
  display: inline-block;
  margin-top: 18px;
}
#logo {
  position: absolute;
  left: 10px;
}
#time {
  position: absolute;
  left: 70%;
}
#log {
  position: absolute;
  width: 45px;
  right: 10px;
}
</style>