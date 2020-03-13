<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-10">
        <FilmList v-bind:movies="$parent.filmList"></FilmList>
      </div>
    </div>
  </div>
</template>

<script>
  import FilmList from '../components/FilmList.vue'

  export default {
    name: 'Home',
    components: {
      FilmList
    }
  }
</script>
