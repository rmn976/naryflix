<template>
  <div id="home">
    <div class="row">
      <div class="col-lg-10">
        <p>Recherche de {{ search }}</p>
        <MovieList></MovieList>
      </div>
    </div>
  </div>
</template>

<script>
  import MovieList from '../components/MovieList.vue'

  export default {
    name: 'Home',
    created() {
      if (this.$store.state.userLogged == '') {
        this.$router.push('/login');
      }
    },
    components: {
      MovieList
    },
    computed: {
      search() {
        return this.$store.state.searchMovie;
      }
    }
  }
</script>
