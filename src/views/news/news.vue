<template>
  <div class="page">
    <h2 class="main-title">
      <span class="text">Новости и объявления</span>
    </h2>

    <div class="content">
      <ul class="articles">
        <li class="item" v-for="newsItem of news">
          <news-item :newsItem="newsItem"></news-item>
        </li>
      </ul>

      <!--<aside></aside>-->
    </div>
  </div>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import {Action, State} from "vuex-class";
  import NewsItem from './components/news-item';
  import {NEWS_NAMESPACE, INewsItem} from "./news.typings";

  @Component({
    components: {
      NewsItem,
    }
  })
  export default class News {
    @State("news", {namespace: NEWS_NAMESPACE})
    private news: INewsItem[];

    @Action('fetchNews', {namespace: NEWS_NAMESPACE})
    private fetchNews: Function;

    mounted() {
      this.fetchNews();
    }
  }
</script>

<style scoped lang="scss">
  .main-title {
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

  .content {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    text-align: left;
  }

  .articles {
    width: 70%;

    .item {
      margin-top: 40px;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  aside {
    width: 30%;
  }

  .news {

  }
</style>