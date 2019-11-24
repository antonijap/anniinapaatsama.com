<template>
  <div id="app">
    <router-view/>
    <footer/>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style lang="scss">
@import "./assets/css/resetr.css";
@import "./assets/css/prismic-edit-button.css";
@import "./assets/scss/main.scss";
</style>
