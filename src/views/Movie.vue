<template>
    <div id="movie">
        <MovieInfo :movie="movie">Film</MovieInfo>
    </div>
</template>

<script>
    import MovieInfo from '../components/MovieInfo.vue'

    export default {
        name: 'Movie',
        components: {
            MovieInfo
        },
        data: function () {
            return {
                movie: null,
                id: 0
            }
        },
        mounted: function () {
            this.id = this.$route.params.id;
            fetch('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=3343ddbfc8f76de0f8b2c6901a410684&language=en-US')
                .then(result => result.json())
                .then((json) => {
                    this.movie = json;
                    console.log(json);
                })
                .catch((error) => {
                    console.error(`Une erreur s'est prduite.`);
                    console.log(error);
                });
        },
    }
</script>

<style scoped>

</style>