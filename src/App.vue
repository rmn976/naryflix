<template>
  <div id="app">
    <div class="layer" :style="style">
      <div v-if="userLogged" class="container-fluid p-0 top">
        <NavBar></NavBar>
      </div>
      <div class="container-fluid p-0 bottom">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";

  export default {
    name: "App",
    components: {
      NavBar
    },
    computed: {
      userLogged() {
        return this.$store.state.userLogged;
      },
      style: function () {
        if (this.$router.currentRoute.name === 'Login') {
          return `background-color: rgba(0, 0, 0, 0.5)`
        }
        return `background-color: rgba(0, 0, 0, 0.8)`
      },
    },
    watch: {
      userLogged: function () {
        if (this.userLogged == true) {
          this.$router.push('/')
        }
      }
    }
  }
</script>

<style>
  #app {
    background: url("assets/login_background.jpg") repeat;
    min-height: 100vh;
    overflow: hidden;
  }
  .layer {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
  .top {
    height: 20%;
  }
  .bottom {
    min-height: 80vh;
  }

</style>
