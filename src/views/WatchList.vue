<template>
  <div id="watchList">
    <div v-for="movie in watchList" :key="movie.id">
      <router-link :to="{ name: 'Movie', params: { id: movie.id }}"  class="img-fluid">
        <img v-if="movie.poster_path != null" :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path">
        <img v-else src="../assets/image-non-disponible.png" class="img-fluid">
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: "WatchList",
    created() {
      if (this.$store.state.userLogged === false) {
        this.$router.push('/login');
      } else {
        this.$store.dispatch('getWatchList');
      }
    },
    computed: {
      watchList() {
        return this.$store.state.watchList;
      }
    }
  }
</script>

<style scoped>

</style>