<template>
  <div id="app">
    <div class="container-fluid">
      <h1 class="text-danger">FakeFlix</h1>
      <NavBar v-if="userLogged"></NavBar>
    </div>
    <div class="container">
      <router-view/>
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
      }
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
