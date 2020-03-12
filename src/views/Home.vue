<template>
  <div class="home">
  </div>
</template>

<script>

  export default {
    name: 'Home',
    mounted: function () {
      this.id = this.$route.params.id
      fetch('https://api.themoviedb.org/3/search/movie?api_key=3343ddbfc8f76de0f8b2c6901a410684&language=en-US&query='star'&page=1&include_adult=false')
              .then(result => result.json())
              .then((json) => {
                this.film = json;
                console.log(json);
              })
              .catch((error) => {
                console.error(`Une erreur s'est prduite.`);
                console.log(error);
              });
    },
  }
</script>
