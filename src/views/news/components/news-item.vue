<template>
  <article>
    <h3 class="title">{{newsItem.title}}</h3>
    <img class="cover-image" :src="newsItem.coverPhotoUrl" alt="">
    <p class="description">{{newsItem.shortDescription}}</p>

    <div class="footer">
      <div class="footer-left">
        <span class="create-date">20.08.2018</span>
        <span class="author">Автор: Администрация</span>
      </div>

      <a href="" class="read-more">Читать дальше</a>
    </div>
  </article>
</template>

<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";
  import {INewsItem} from "../news.typings";

  @Component
  export default class NewsItem {
    @Prop()
    public newsItem: INewsItem;

    mounted() {
      console.log(this.newsItem);
    }
  }
</script>

<style scoped lang="scss">
  $yellow: #f9b707;

  .title {
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 1.4;
    text-align: justify;
    text-transform: uppercase;
    cursor: pointer;
  }

  .cover-image {
    display: inline-block;
    width: 100%;
    margin-top: 20px;
  }

  .description {
    margin-top: 20px;
    color: #888;
    line-height: 1.4;
    text-align: justify;
  }

  .footer {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }

  .footer-left {
    font-style: italic;
  }

  .create-date {
    color: $yellow;
  }

  .author {
    margin-left: 20px;
  }

  .read-more {
    color: $yellow;
  }
</style>