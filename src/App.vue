<template>
  <div id="app">
    <main-header></main-header>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import MainHeader from "./components/main-header/main-header";
  import {Component} from 'vue-property-decorator';

  @Component({
    components: {MainHeader},
  })
  export default class App {
  }
</script>

<style lang="scss">
  @import "../node_modules/reset-css/reset.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  * {
    box-sizing: border-box;
  }

  .page {
    padding: 50px;
  }


</style>
