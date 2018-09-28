<template>
  <article>
    <router-link class="title" :to="{path: newsItem.id.toString()}" append>{{newsItem.title}}</router-link>
    <img class="cover-image" :src="newsItem.coverPhotoUrl" alt="">
    <p class="description">{{newsItem.shortDescription}}</p>

    <div class="footer">
      <div class="footer-left">
        <span class="create-date">20.08.2018</span>
        <span class="author">Автор: Администрация</span>
      </div>

      <router-link to="/about" class="read-more">Читать дальше</router-link>
    </div>
  </article>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {INewsItem} from "../news.typings";

  @Component
  export default class NewsItem extends Vue {
    @Prop()
    public newsItem: INewsItem;

    public mounted() {
      console.log(this.newsItem);
    }
  }
</script>

<style scoped lang="scss">
  $yellow: #f9b707;

  .title {
    display: block;
    color: inherit;
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 1.4;
    text-align: justify;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: $yellow;
    }
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
    transition: all 0.2s ease-in-out;

    &:hover {
      padding-right: 5px;
    }
  }
</style>