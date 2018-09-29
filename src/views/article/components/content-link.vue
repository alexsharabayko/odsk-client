<template>
  <div class="wrapper">
    <h4 class="title">{{data.title}}</h4>
    <a class="link" :href="data.href" target="_blank">{{data.href}}</a>
  </div>
</template>

<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";
  import {NewsItemLinkContent} from "../../../typings/news.typings";

  @Component
  export default class ContentLink {
    @Prop()
    public data: NewsItemLinkContent;
  }
</script>

<style scoped lang="scss">
  @import "../../../styles/vars";

  .wrapper {
    padding: 30px;
    color: white;
    background-color: $yellow;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
    text-transform: uppercase;
  }

  .link {
    display: inline-block;
    margin-top: 20px;
    color: white;
    font-size: 18px;
    transition: color 0.4s ease-in-out;

    &:hover {
      color: $black;
    }
  }
</style>