<template>
    <div id="movie" v-if="movie != null">
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
        <button v-if="isInList(movie.id, favList)" v-on:click="removeFromFav()">Supprimer des favoris</button>
        <button v-else v-on:click="addToFav()">Ajouter aux favoris</button>
        <button v-if="isInList(movie.id, watchList)" v-on:click="removeFromWatch()">Supprimer de ma liste</button>
        <button v-else v-on:click="addToWatch()">Ajouter à ma liste</button>
    </div>
</template>

<script>

    export default {
        name: 'Movie',
        created: function () {
            if (this.$store.state.userLogged === false) {
                this.$router.push('/login');
            } else {
                this.$store.dispatch('getFavList');
                this.$store.dispatch('getWatchList');
            }

        },
        computed: {
            movie: function () {
                return this.$store.state.movie
            },
            movieDate: function () {
                let date = new Date(this.movie.release_date);
                let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
                return date.toLocaleDateString("fr-FR", options);
            },
            favList: function () {
                return this.$store.state.favList;
            },
            watchList: function () {
                return this.$store.state.watchList;
            }
        },
        methods: {
            addToFav: function () {
                this.$store.dispatch('setToFav', {id: this.movie.id, status: true});
            },
            addToWatch: function () {
                this.$store.dispatch('setToWatch', {id: this.movie.id, status: true});
            },
            removeFromFav: function () {
                this.$store.dispatch('setToFav', {id: this.movie.id, status: false});
            },
            removeFromWatch: function () {
                this.$store.dispatch('setToWatch', {id: this.movie.id, status: false});
            },
            isInList: function (id, list) {
                if (list !== null) {
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].id === id) {
                            return true;
                        }
                    }
                }
                return false;
            },
        }
    }
</script>

<style scoped>

</style>