<template>
  <div class="page">hohoho {{id}}</div>
</template>

<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Article {
    @Prop()
    public id: string;
  }
</script>

<style scoped lang="scss">

</style>