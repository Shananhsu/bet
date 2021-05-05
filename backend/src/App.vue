<template>
  <Login @Login="handleLogin" v-if="!isLogin" @session="handleSession" />
  <SideBar v-if="isLogin" />
  <TopBar v-if="isLogin" @logout="handleLogout" />
  <SearchBar v-if="isLogin" @boolen="handleEmit" />
  <Content
    v-if="isLogin"
    :bool="bool"
    @close="handleEmit"
    :closeGame="closeGame"
  />
</template>

<script>
import Login from "./components/Login.vue";
import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";
import SearchBar from "./components/SearchBar.vue";
import Content from "./components/Content.vue";
export default {
  name: "App",
  components: { Login, SideBar, TopBar, SearchBar, Content },
  data() {
    return {
      // 控制玩家列表開關
      bool: "",
      // 控制明細列表開關
      closeGame: "",
      isLogin: false,
      session: "",
    };
  },

  methods: {
    handleEmit(e) {
      this.bool = e;
      this.closeGame = !e;
    },
    handleSession(e) {
      this.session = e;
    },
    handleLogin(e) {
      this.isLogin = true;
    },
    handleLogout(e) {
      this.isLogin = !this.isLogin;
      req.session.data.destroyed();
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
