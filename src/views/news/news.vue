<template>
  <div class="page">
    <h2 class="page-title">
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