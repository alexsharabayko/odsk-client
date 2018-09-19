<template>
  <h2 class="title">
    <span class="text">{{pageTitle}}</span>
  </h2>

  <section class="content">
  </section>
</template>

<script lang="ts">


  import {BasePageComponent} from "../../base/base-page-component";
  import {Component} from "vue-property-decorator";
  import {mixins} from "vue-class-component";

  @Component
  export default class News extends mixins(BasePageComponent) {
    public pageTitle = "Новости и объявления";
  }
</script>

<style scoped lang="scss">
  .title {
    margin-top: 50px;
    color: #333;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;

    .text {
      display: inline-block;
      position: relative;
      padding-top: 20px;

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #f9b707;
      }
    }
  }
</style>