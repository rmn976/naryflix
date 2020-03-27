<template>
    <div id="favorite">
        <div v-for="movie in favList" :key="movie.id">
            <router-link :to="{ name: 'Movie', params: { id: movie.id }}"  class="img-fluid">
                <img v-if="movie.poster_path != null" :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path">
                <img v-else src="../assets/image-non-disponible.png" class="img-fluid">
            </router-link>
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
        }
    }
</script>

<style scoped>

</style>