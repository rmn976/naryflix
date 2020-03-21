<template>
    <div id="movieInfo">
        <h2>{{ movie.original_title }}</h2>
    </div>
</template>

<script>
    export default {
        name: "movieInfo",
        props:['movie']
    }
</script>

<style scoped>

</style>