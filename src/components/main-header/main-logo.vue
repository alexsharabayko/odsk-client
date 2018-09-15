<template>
  <div class="main-logo">
    <h1>Новая Одесская</h1>
  </div>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';

  @Component()
  export default class MainLogo {
  }
</script>

<style scoped lang="scss">
  .main-logo {
    color: white;
  }

  h1 {
    font-size: 40px;
    font-weight: bold;
  }
</style>