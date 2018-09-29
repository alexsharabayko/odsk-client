<template>
  <div class="main-header" :class="{simple: isSimpleHeader}">
    <logo></logo>
    <main-nav></main-nav>
  </div>
</template>

<script lang="ts">
  import {State} from 'vuex-class';
  import MainNav from "./main-nav";
  import Logo from "../logo/logo";
  import {Component} from "vue-property-decorator";

  @Component({
    components: {MainNav, Logo},
  })
  export default class MainHeader {
    @State('isSimpleHeader')
    public isSimpleHeader: boolean;
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

    &.simple {
      position: static;
    }
  }
</style>