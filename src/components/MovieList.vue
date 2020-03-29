<template>
    <div id="MovieList">
        <h2 class="text-white text-center my-5">Résultats de recherche pour <span class="text-primary">{{ search }}</span></h2>
        <div v-if="moviesList !== null">
            <transition-group name="movie-trans" tag="div" class="d-flex flex-wrap justify-content-center" v-if="moviesList.length !== 0">
                <span v-for="movie in moviesList" :key="movie.id" class="movie p-1">
                    <router-link :to="{ name: 'Movie', params: { id: movie.id }}">
                        <img @click="setMovie(movie)" v-if="movie.poster_path != null" :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path">
                        <img @click="setMovie(movie)" v-else src="../assets/image-non-disponible.png">
                        <h6>{{ movie.original_title }}</h6>
                    </router-link>
                </span>
            </transition-group>
            <h3 v-else class="text-white text-center">Pas de résultats pour {{ search }}</h3>
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
    .movie-trans-enter-active, .movie-trans-leave-active {
        transition: all 1s;
    }
    .movie-trans-enter, .movie-trans-leave-to {
        opacity: 0;
        transform: translateY(30px);
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