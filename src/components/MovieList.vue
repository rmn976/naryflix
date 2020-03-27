<template>
    <div id="MovieList">
        <div v-for="movie in moviesList" :key="movie.id">
            <router-link :to="{ name: 'Movie', params: { id: movie.id }}">
                <img @click="setMovie(movie)" v-if="movie.poster_path != null" :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path">
                <img @click="setMovie(movie)" v-else src="../assets/image-non-disponible.png">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MovieList",
        computed: {
            moviesList () {
                return this.$store.state.moviesList;
            },
        },
        methods: {
            setMovie: function (movie) {
                this.$store.commit('setMovie', movie)
            }
        }
    }
</script>

<style scoped>

</style>