<template>
  <div class="about">
    <H1></H1>
    <NavBar></NavBar>
    <p>Page about</p>
  </div>
</template>

<script>
// @ is an alias to /src
import H1 from "../components/H1";
import NavBar from "../components/NavBar";

export default {
  name: 'Home',
  components: {
    H1,
    NavBar
  }
}
</script>
