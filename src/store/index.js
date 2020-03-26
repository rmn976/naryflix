import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moviesList: null,
    searchMovie: ''
  },
  mutations: {
    setSearchMovie(state, term) {
      state.searchMovie = term;
    }
  },
  actions: {
    loadSearchList(context) {
      /*if (this.$router.currentRoute.name !== 'Home') {
        this.$router.push('/');
      }*/
      fetch('https://api.themoviedb.org/3/search/movie?api_key=3343ddbfc8f76de0f8b2c6901a410684&language=en-US&query=' + context.state.searchMovie + '&page=1&include_adult=false')
          .then(result => result.json())
          .then((json) => {
            context.state.moviesList = json.results;
          })
          .catch((error) => {
            console.error(`Une erreur s'est prduite.`);
            console.log(error);
          });
    }
  },
  modules: {
  }
})
