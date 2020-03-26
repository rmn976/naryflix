<template>
    <div id="movie">
        <img v-if="movie.poster_path != null" :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path">
        <img v-else src="../assets/image-non-disponible.png" class="img-fluid">
        <h2>{{ movie.original_title }}</h2>
        <p>Sortie : {{ movieDate }}</p>
        <p>{{ movie.overview }}</p>
        <h3>Informations</h3>
        <ul>
            <li>Popularité : {{ movie.popularity }}</li>
            <li>Note : {{ movie.vote_average }}/10</li>
            <li>Nombre de vote : {{ movie.vote_count }}</li>
        </ul>
        <button v-on:click="test()">Ajouter aux favoris</button>
        <button>A voir</button>
    </div>
</template>

<script>

    export default {
        name: 'Movie',
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
        computed: {
            movieDate: function () {
                let date = new Date(this.movie.release_date);
                let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
                return date.toLocaleDateString("fr-FR", options);
            }
        },
    }
</script>

<style scoped>

</style>