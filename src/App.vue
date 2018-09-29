<template>
  <div id="app">
    <main-header></main-header>
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
  @import "styles/common";
</style>
