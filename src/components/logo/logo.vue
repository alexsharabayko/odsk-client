<template>
  <div class="main-logo">
    <img class="logo-img" :src="logoUrl" alt="">
    <span class="title">Новая Одесская</span>
  </div>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";

  @Component({})
  export default class Logo {
    public logoUrl = require("./logo.svg");
  }
</script>

<style scoped lang="scss">
  .main-logo {
    display: flex;
    align-items: center;
    color: white;
  }

  .logo-img {
    display: inline-block;
    width: 50px;
  }

  .title {
    display: inline-block;
    position: relative;
    left: 15px;
    font-size: 40px;
    font-weight: bold;
  }
</style>