<template>
  <p class="content-text">{{viewData}}</p>
</template>

<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class ContentText {
    @Prop()
    public data: string[];

    get viewData(): string {
      return this.data.join(" ");
    }
  }
</script>

<style scoped lang="scss">
  .content-text {
    color: #888;
    font-size: 18px;
    line-height: 1.4;
    text-align: justify;
  }
</style>