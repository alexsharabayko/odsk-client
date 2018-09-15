<template>
  <div class="main-header">
    <main-logo></main-logo>
    <main-nav></main-nav>
  </div>
</template>

<script lang="ts">
  import MainLogo from "./main-logo";
  import MainNav from "./main-nav";
  import {Component} from "vue-property-decorator";

  @Component({
    components: {MainNav, MainLogo},
  })
  export default class MainHeader {
    mounted() {
      console.log(this);
    }
  };
</script>

<style scoped lang="scss">
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px 25px;
    background-color: #272727;
  }
</style>