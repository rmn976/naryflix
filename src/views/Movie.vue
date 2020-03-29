<template>
    <div id="movie" v-if="movie != null" :style=style>
        <div class="movieLayer">
            <div class="row pt-5">
                <div class="offset-1 col-3">
                    <img v-if="movie.poster_path != null" :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path">
                    <img v-else src="../assets/image-non-disponible.png" class="img-fluid">
                </div>
                <div class="col-7">
                    <h2 class="mt-4 mb-0">{{ movie.original_title }}</h2>
                    <p>Sortie : {{ movieDate }}</p>
                    <div class="my-5">
                        <span v-if="isInList(movie.id, favList)" v-on:click="removeFromFav()" style="font-size: 1.5em; color: #c42121;" class="mx-4 icon">
                            <i class="fas fa-heart"></i>
                        </span>
                        <span v-else v-on:click="addToFav()" style="font-size: 1.5em; color: white;" class="mx-4 icon">
                            <i class="fas fa-heart"></i>
                        </span>
                        <span v-if="isInList(movie.id, watchList)" v-on:click="removeFromWatch()" style="font-size: 1.5em; color: #184ba3;" class="mx-4 icon">
                            <i class="fas fa-bookmark"></i>
                        </span>
                        <span v-else v-on:click="addToWatch()" style="font-size: 1.5em; color: white;" class="mx-4 icon">
                            <i class="fas fa-bookmark"></i>
                        </span>
                        <span class="mx-4 icon" v-b-modal.modal-1><i class="fas fa-play-circle"></i> Regarder le trailer</span>
                        <b-modal id="modal-1" hide-header hide-footer size="xl">
                            <iframe :src=video></iframe>
                        </b-modal>
                    </div>
                    <h4 class="mt-4 mb-3">Résumé</h4>
                    <p class="overview">{{ movie.overview }}</p>
                    <small>
                        Popularité : {{ movie.popularity }} <i class="fas fa-circle mx-2" style="font-size: 0.3em; color: white;"></i> Note : {{ movie.vote_average }}/10 <i class="fas fa-circle mx-2" style="font-size: 0.3em; color: white;"></i> Nombre de vote : {{ movie.vote_count }}
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex'
    export default {
        name: 'Movie',
        created: function () {
            if (this.$store.state.userLogged === false) {
                this.$router.push('/login');
            } else {
                this.$store.dispatch('getFavList');
                this.$store.dispatch('getWatchList');
                this.$store.dispatch('getVideo');
            }

        },
        computed: {
            movieDate: function () {
                let date = new Date(this.movie.release_date);
                let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
                return date.toLocaleDateString("fr-FR", options);
            },
            style: function () {
                return `background-image: url("https://image.tmdb.org/t/p/original${this.movie.backdrop_path}")`
            },
            video: function () {
                return `https://www.youtube.com/embed/${this.videoKey}?controls=1`
            },
            ...mapState([
                'movie',
                'videoKey',
                'favList',
                'watchList',
            ])
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
    #movie {
        background-size: cover;
        min-height: 90vh;
    }
    .movieLayer {
        background-color: rgba(15, 15, 15, 0.8);
        width: 100%;
        min-height: 90vh;
    }
    .col-7 {
        color: #ffffff;
    }
    iframe {
        width: 100%;
        height: 50vh;
    }
    .overview {
        line-height: 150%;
    }
    .icon {
        cursor: pointer;
    }

</style>