<template>
  <div class="main-header">
    <logo></logo>
    <main-nav></main-nav>
  </div>
</template>

<script lang="ts">
  import MainNav from "./main-nav";
  import Logo from "../logo/logo";
  import {Component} from "vue-property-decorator";

  @Component({
    components: {MainNav, Logo},
  })
  export default class MainHeader {
  };
</script>

<style scoped lang="scss">
  .main-header {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px 25px;
    background-color: #272727;
  }
</style>