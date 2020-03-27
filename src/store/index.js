import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: '3343ddbfc8f76de0f8b2c6901a410684',
    moviesList: null,
    searchMovie: '',
    requestToken: '',
    username: '',
    password: '',
    sessionId: '',
    favList: null,
    watchList: null,
    userLogged: false,
  },
  mutations: {
    setMoviesList(state, term) {
        state.moviesList = term;
    },
    setSearchMovie(state, term) {
        state.searchMovie = term;
    },
    setRequestToken(state, term) {
        state.requestToken = term;
    },
    setUsername(state, term) {
        state.username = term;
    },
    setPassword(state, term) {
        state.password = term;
    },
    setSessionId(state, term) {
        state.sessionId = term;
    },
    setFavList(state, term) {
        state.favList = term;
    },
    setWatchList(state, term) {
        state.watchList = term;
    },
    setUserLogged(state, term) {
        state.userLogged = term;
    },
  },
  actions: {
    loadSearchList(context) {
      fetch('https://api.themoviedb.org/3/search/movie?api_key=' + context.state.apiKey + '&language=en-US&query=' + context.state.searchMovie + '&page=1&include_adult=false')
          .then(result => result.json())
          .then((json) => {
              context.commit('setMoviesList', json.results)
          })
          .catch((error) => {
            console.error(`Une erreur s'est prduite au niveau du search.`);
            console.log(error);
          });
    },
    getRequestToken(context, {username, password}) {
        context.commit('setUsername', username);
        context.commit('setPassword', password);
        fetch('https://api.themoviedb.org/3/authentication/token/new?api_key=' + context.state.apiKey)
            .then(result => result.json())
            .then((json) => {
                context.commit('setRequestToken', json.request_token);
                context.dispatch('authenticate')
            })
            .catch((error) => {
                console.error(`Une erreur s'est produite pour le requestToken`);
                console.log(error);
            });
    },
    authenticate (context) {
        let myInit = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: context.state.username,
                password: context.state.password,
                request_token: context.state.requestToken
            })
        };
        fetch('https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=' + context.state.apiKey, myInit)
            .then(result => {result.json()})
            .then( () => {
                context.dispatch('getSessionId')
            })
            .catch((error) => {
            console.error(`Une erreur s'est produite sur le authenticate.`);
            console.log(error);
            });
    },
    getSessionId (context) {
        let myInit = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                request_token: context.state.requestToken
            })
        };
        fetch('https://api.themoviedb.org/3/authentication/session/new?api_key=' + context.state.apiKey, myInit)
            .then(result => result.json())
            .then((json) => {
                if (json.success == true) {
                    context.commit('setUserLogged', true);
                    context.commit('setSessionId', json.session_id)
                }
            })
            .catch((error) => {
                console.error(`Une erreur s'est produite sur le sessionId.`);
                console.log(error);
            });
    },
    getFavList (context) {
        fetch('https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=' + context.state.apiKey + '&session_id=' + context.state.sessionId + '&language=en-US&sort_by=created_at.asc&page=1')
            .then(result => result.json())
            .then((json) => {
                context.commit('setFavList', json.results)
            })
            .catch((error) => {
                console.error(`Une erreur s'est prduite au niveau de la favList.`);
                console.log(error);
            });
    },
    setToFav (context, movie) {
        let myInit = {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify({
                "media_type": "movie",
                "media_id": movie.id,
                "favorite": movie.status
            })
        };
        fetch('https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=' + context.state.apiKey + '&session_id=' + context.state.sessionId, myInit)
            .then(result => result.json())
            .then( () => {
                context.dispatch('getFavList')
            })
            .catch((error) => {
                console.error(`Une erreur s'est prduite au niveau de la favList.`);
                console.log(error);
            });
    },
    getWatchList (context) {
          fetch('https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=' + context.state.apiKey + '&language=en-US&session_id=' + context.state.sessionId + '&sort_by=created_at.asc&page=1')
              .then(result => result.json())
              .then((json) => {
                  context.commit('setWatchList', json.results)
              })
              .catch((error) => {
                  console.error(`Une erreur s'est prduite au niveau de la favList.`);
                  console.log(error);
              });
    },
    setToWatch (context, movie) {
          let myInit = {
              method: "POST",
              headers: {"Content-Type": "application/json;charset=utf-8"},
              body: JSON.stringify({
                  "media_type": "movie",
                  "media_id": movie.id,
                  "watchlist": movie.status
              })
          };
          fetch('https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=3343ddbfc8f76de0f8b2c6901a410684&session_id=' + context.state.sessionId, myInit)
              .then(result => result.json())
              .then( () => {
                  context.dispatch('getWatchList')
              })
              .catch((error) => {
                  console.error(`Une erreur s'est prduite au niveau de la favList.`);
                  console.log(error);
              });
    },
  },
  modules: {
  }
})


/*userConnexion(context) {
  context.dispatch('getRequestToken')
      .then( () => context.dispatch('authenticate'))
      .then( () => context.dispatch('getSessionId'))
      .catch((error) => {
          console.error(`Une erreur s'est produite pour la connexion`);
          console.log(error);
      });
},*/
