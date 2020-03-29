<template>
    <div id="favorite">
        <h2 class="text-white text-center my-3">Liste de vos films préférés</h2>
        <div class="d-flex flex-wrap justify-content-center">
            <div v-for="movie in favList" :key="movie.id" class="movie p-1">
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
        name: "Favorite",
        created: function () {
            if (this.$store.state.userLogged === false) {
                this.$router.push('/login');
            } else {
                this.$store.dispatch('getFavList');
            }
        },
        computed: {
            favList() {
                return this.$store.state.favList;
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