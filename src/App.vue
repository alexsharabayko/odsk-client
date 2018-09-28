<template>
  <div id="app">
    <!--<main-header></main-header>-->
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
  import MainHeader from "./components/main-header/main-header";
  import {Component} from "vue-property-decorator";

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

  .page-title {
    color: #333;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;

    .text {
      display: inline-block;
      position: relative;
      padding-top: 20px;

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #f9b707;
      }
    }
  }
</style>
