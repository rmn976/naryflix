<template>
    <div id="nav">
        <b-navbar class="w-100" toggleable="lg">
            <b-navbar-brand to="/"><img src="https://fontmeme.com/permalink/200328/4647fa15c30f81ce7987cb8d6c7ddc02.png" alt=""></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/favorite">Favoris</b-nav-item>
                    <b-nav-item to="/watchlist">A voir</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Rechercher" v-on:keydown.enter="debounceSearch($event.target.value)" v-on:keyup="debounceSearch($event.target.value)"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" @click="debounceSearch(search)"><i class="fas fa-search"></i></b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import _ from 'lodash'
    export default {
        name: "NavBar",
        computed: {
            search: function () {
                return this.$store.state.search
            }
        },
        methods: {
            debounceSearch: _.debounce( function (term) {
                if (this.$store.state.userLogged == true) {
                    if (this.$router.currentRoute.name !== 'Home') {
                        this.$router.push('/');
                    }
                    this.$store.commit('setSearch' ,term);
                    this.$store.dispatch('loadMovieList');
                }
            }, 500)
        }
    }
</script>

<style scoped>
    #nav {
        height: 100%;
    }

    nav {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
    img {
        margin-left: 5%;
        margin-top: 3%;
        height: 45px;
        width: 167px;
    }
    #nav a {
        font-weight: bold;
        color: rgba(255, 255, 255, 0.7);
    }

    #nav a.router-link-exact-active {
        color: #ffffff;
    }
</style>