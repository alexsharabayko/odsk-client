<template>
  <div class="main-nav">
    <router-link to="/news" class="item">Новости</router-link>
    <router-link to="/about" class="item">Информация</router-link>
    <router-link to="/places" class="item">Места</router-link>
  </div>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';

  @Component
  export default class MainNav {
  }
</script>

<style scoped lang="scss">
.main-nav {
  color: white;

  .item {
    display: inline-block;
    margin-left: 20px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }

  a {
    color: white;
  }
}
</style>