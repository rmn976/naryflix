<template>
    <div id="MovieList">
        <h2 class="text-white text-center">Résultats de recherche pour <span class="text-primary">{{ search }}</span></h2>
        <div class="d-flex flex-wrap justify-content-center">
            <div v-for="movie in moviesList" :key="movie.id" class="movie p-1">
                <router-link :to="{ name: 'Movie', params: { id: movie.id }}">
                    <img @click="setMovie(movie)" v-if="movie.poster_path != null" :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path">
                    <img @click="setMovie(movie)" v-else src="../assets/image-non-disponible.png">
                    <h6>{{ movie.original_title }}</h6>
                </router-link>
            </div>
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
            search() {
                return this.$store.state.search;
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
    .movie {
        width: 15%;
        height: auto;
    }
    a {
        color: #ffffff;
    }
    a:hover {
        text-decoration: none;
    }
    h6 {
        overflow-wrap: break-word;
    }
    img {
        width: 100%;
        border-radius: 10px;
    }

</style>