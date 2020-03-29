<template>
  <div id="home">
    <div class="row m-0">
      <div class="offset-2 col-8">
        <MovieList v-if="search !== ''"></MovieList>
        <div v-else>
          <h2 class="text-white text-center une">A la Une sur <img src="https://fontmeme.com/permalink/200328/4647fa15c30f81ce7987cb8d6c7ddc02.png"></h2>
          <carousel class="mt-4" :perPage="4" :mouseDrag="false" :autoplay="true" :autoplayTimeout="2000" :speed="1500" :loop="true">
            <slide v-for="movie in popularList" :key="movie.id">
              <router-link :to="{ name: 'Movie', params: { id: movie.id }}">
                <img @click="setMovie(movie)" v-if="movie.poster_path != null" :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path">
                <img @click="setMovie(movie)" v-else src="../assets/image-non-disponible.png">
              </router-link>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MovieList from '../components/MovieList.vue'
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    name: 'Home',
    created() {
      if (this.$store.state.userLogged === false) {
        this.$router.push('/login');
      }
    },
    components: {
      MovieList,
      Carousel,
      Slide
    },
    computed: {
      search: function () {
        return this.$store.state.search;
      },
      popularList: function () {
        return this.$store.state.popularList;
      }
    },
    methods: {
      setMovie: function (movie) {
        this.$store.commit('setMovie', movie)
      }
    }
  }
</script>

<style scoped>
  .une {
    margin-top: 15vh!important;
  }
</style>