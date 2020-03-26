<template>
    <div id="MovieList d-flex flex-wrap">
        <div v-for="movie in movies" :key="movie.id">
            <router-link :to="{ name: 'Movie', params: { id: movie.id }}"  class="img-fluid">
                <img v-if="movie.poster_path != null" :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path">
                <img v-else src="../assets/image-non-disponible.png" class="img-fluid">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MovieList",
        props: ['movies']
    }
</script>

<style scoped>

</style>