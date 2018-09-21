<template>
  <div>
    <h2 class="title">
      <span class="text">{{pageTitle}}</span>
    </h2>

    <section class="content">
      <ul class="articles">
        <li class="item">
          <span>sdfdsf</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {Mutation, State} from "vuex-class";
  import {RootState} from "../../store";

  @Component
  export default class News extends Vue {
    @State('pageTitle')
    private pageTitle: RootState;

    @Mutation('setPageTitle')
    private setPageTitle: Function;

    mounted() {
      console.log(this.pageTitle);

      setTimeout(() => {
        this.setPageTitle('New title');
      }, 2000);
    }
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