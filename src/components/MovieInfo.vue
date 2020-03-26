<template>
    <div id="movieInfo">
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
        name: "movieInfo",
        props:['movie'],
        computed: {
            movieDate: function () {
                let date = new Date(this.movie.release_date);
                let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
                return date.toLocaleDateString("fr-FR", options);
            }
        },
        methods: {
            test() {
                this.$root.$emit('add-fav', 'test');
            }
        }
    }
</script>

<style scoped>

</style>