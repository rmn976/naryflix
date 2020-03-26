<template>
    <div id="favorite">
        <p>Page des favoris {{ test }}</p>
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
            this.$root.$on('add-fav', () => {
                console.log('test');
                this.test = 3;
            });
        }
    }
</script>

<style scoped>

</style>