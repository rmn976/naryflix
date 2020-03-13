<template>
    <div class="filmList d-flex flex-wrap">
        <div v-for="movie in movies" :key="movie.id">
            <div class="p-1" v-if="movie.poster_path != null">
                <img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" class="img-fluid">
            </div>
            <div class="p-1" v-else>
                <img src="../assets/image-non-disponible.png" class="img-fluid">
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "FilmList",
        props: ['movies']
    }
</script>

<style scoped>

</style>