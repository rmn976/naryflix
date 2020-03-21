<template>
  <div id="home">
    <div class="row">
      <div class="col-lg-10">
        <MovieList :movies="$parent.moviesFetch"></MovieList>
      </div>
    </div>
  </div>
</template>

<script>
  import MovieList from '../components/MovieList.vue'

  export default {
    name: 'Home',
    components: {
      MovieList
    }
  }
</script>
