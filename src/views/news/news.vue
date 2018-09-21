<template>
  <div>
    <h2 class="main-title">
      <span class="text">Новости и объявления</span>
    </h2>

    <div class="content">
      <ul class="articles">
        <li class="item" v-for="newsItem of news">
          <article class="news">
            <span class="title">{{newsItem.title}}</span>
            <img class="cover-image" :src="newsItem.coverPhotoUrl" alt="">
            <p class="description">{{newsItem.shortDescription}}</p>
          </article>
        </li>
      </ul>

      <aside></aside>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {Action, State} from "vuex-class";
  import {NEWS_NAMESPACE, NewsItem} from "./news.typings";

  @Component
  export default class News extends Vue {
    @State("news", {namespace: NEWS_NAMESPACE})
    private news: NewsItem[];

    @Action('fetchNews', {namespace: NEWS_NAMESPACE})
    private fetchNews: Function;

    mounted() {
      this.fetchNews();
    }
  }
</script>

<style scoped lang="scss">
  .main-title {
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

  .content {
    display: flex;
    margin-top: 50px;
  }

  .articles {
    width: 70%;
  }
</style>