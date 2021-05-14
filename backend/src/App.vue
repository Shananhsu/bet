<template>
  <Login @Login="handleLogin" v-if="!isLogin" @session="handleSession" />
  <SideBar
    v-if="isLogin"
    :account="account"
    @clickReport="handleReport"
    @clickMember="handleReport"
  />
  <TopBar v-if="isLogin" @logout="handleLogout" />
  <SearchBar v-if="isLogin" @boolen="handleEmit" />
  <Content
    v-if="isLogin"
    :bool="bool"
    @close="handleEmit"
    :closeGame="closeGame"
  />
  <Member v-if="isLogin" :report="report" @toShowModal="handleModal" />
  <Modal v-if="showModal" @backdrop="handleModal" />
</template>

<script>
import Login from "./components/Login.vue";
import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";
import SearchBar from "./components/SearchBar.vue";
import Content from "./components/Content.vue";
import Member from "./components/Member.vue";
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { Login, SideBar, TopBar, SearchBar, Content, Member, Modal },
  data() {
    return {
      // 控制玩家列表開關
      bool: "",
      // 控制明細列表開關
      closeGame: "",
      isLogin: false,
      session: "",
      account: "",
      report: false,
      showModal: false,
    };
  },

  methods: {
    handleModal(e) {
      this.showModal = !this.showModal;
    },
    handleReport(e) {
      this.report = e;
    },
    handleEmit(e) {
      this.bool = e;
      this.closeGame = !e;
    },
    handleSession(e) {
      this.session = e;
    },
    handleLogin(e) {
      this.isLogin = true;
      // window.location.href = "/";
    },
    handleLogout(e) {
      this.isLogin = !this.isLogin;
    },
  },
  created() {
    axios
      .get("http://127.0.0.1:3001/backend/login")
      .then((e) => {
        console.log(e.data);
        if (e.data === "guest") {
          this.isLogin = false;
        } else {
          this.isLogin = true;
          this.account = e.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
