<template>
  <div id="box">
    <img src="../assets/OMOG.png" alt="" />

    <div class="field">
      <div class="control">
        <input id="account" type="Account" placeholder="管理者帳號" required />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input id="psw" type="password" placeholder="管理者密碼" required />
      </div>
    </div>
    <button id="login" @click="handleLogin">登入</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
      session: "",
    };
  },
  methods: {
    handleLogin() {
      this.account = account.value;
      this.password = psw.value;
      axios
        .post("http://127.0.0.1:3001/backend/login", {
          account: this.account,
          password: this.password,
        })
        .then((e) => {
          if (e.data === 1) {
            // this.session = e.data[1];
            this.$emit("Login", true);
            // this.$emit("session", e.data[1]);
          }
          if (e.data === 0) {
            alert("請檢查帳號或密碼");
            account.value = "";
            psw.value = "";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: honeydew;
}
#box {
  margin-top: 12%;
  text-align: center;
}
img {
  width: 200px;
  height: 200px;
}
#login {
  margin-top: 20px;
}
input {
  margin-top: 5px;
}
</style>