<template>
  <div id="app">
    <div class="container-fluid">
      <H1></H1>
      <NavBar v-on:begin-search="showMovieList($event)"></NavBar>
    </div>
    <div class="container">
      <router-view/>
    </div>


  </div>
</template>

<script>
  import H1 from "./components/H1";
  import NavBar from "./components/NavBar";

  export default {
    name: "App",
    data: function () {
      return {
        moviesFetch: null
      }
    },
    components: {
      H1,
      NavBar
    },
    methods: {
      showMovieList: function (search) {
        if (this.$router.currentRoute.name !== 'Home') {
          this.$router.push('/');
        }
        fetch('https://api.themoviedb.org/3/search/movie?api_key=3343ddbfc8f76de0f8b2c6901a410684&language=en-US&query=' + search + '&page=1&include_adult=false')
                .then(result => result.json())
                .then((json) => {
                  this.moviesFetch = json.results;
                  console.log(json.results);
                })
                .catch((error) => {
                  console.error(`Une erreur s'est prduite.`);
                  console.log(error);
                });
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
