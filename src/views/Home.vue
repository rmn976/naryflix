<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <H1 msg="FakeFlix"/>
  </div>
</template>

<script>
// @ is an alias to /src
import H1 from "../components/H1";

export default {
  name: 'Home',
  components: {
    H1
  }
}
</script>
