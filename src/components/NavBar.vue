<template>
    <div id="nav">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">Accueil</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/favorite">Favoris</b-nav-item>
                    <b-nav-item to="/watchlist">A voir</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-on:keyup="debounceSearchMovie($event.target.value)"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="debounceSearchMovie($event.target.value)">Search</b-button>
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
        methods: {
            debounceSearchMovie: _.debounce( function (term) {
                console.log('test');
                if (this.$router.currentRoute.name !== 'Home') {
                    this.$router.push('/');
                }
                this.$store.commit('setSearchMovie' ,term);
                this.$store.dispatch('loadSearchList');
            }, 500)
        }
    }
</script>

<style scoped>

</style>