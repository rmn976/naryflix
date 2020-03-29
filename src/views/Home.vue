<template>
  <div id="home">
    <div class="row m-0">
      <div class="offset-2 col-8">
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
      if (this.$store.state.userLogged === false) {
        this.$router.push('/login');
      }
    },
    components: {
      MovieList
    }
  }
</script>
