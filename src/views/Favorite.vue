<template>
    <div id="favorite" @addFav="addFav">
        <p>Page des favoris</p>
    </div>
</template>

<script>

    export default {
        name: "Favorite",
        data: function () {
            return {
                favList: [],
                test: null
            }
        },
        mounted: function () {
            /*this.$root.$on('add-fav', id => {
                console.log('test');
                this.favList.push(id);
            });*/
        },
        methods: {
            addFav: function (id) {
                console.log('test', id);
            },
        }
    }
</script>

<style scoped>

</style>