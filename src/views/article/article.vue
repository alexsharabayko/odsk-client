<template>
  <div class="page">
    <slot v-if="article">{{article.title}}</slot>
  </div>
</template>

<script lang="ts">
  import {Component, Prop} from 'vue-property-decorator';
  import {Action, State} from 'vuex-class';
  import {FETCH_ARTICLE_ACTION, FetchArticlePayload, INewsItem, NEWS_STORE_NAMESPACE} from "../../typings/news.typings";

  @Component
  export default class Article {
    @Prop()
    public id: string;

    @State('article', {namespace: NEWS_STORE_NAMESPACE})
    private article: INewsItem;

    @Action(FETCH_ARTICLE_ACTION, {namespace: NEWS_STORE_NAMESPACE})
    private fetchArticle: (payload: FetchArticlePayload) => any;

    mounted(): void {
      this.fetchArticle({id: parseInt(this.id, 10)});
    }
  }
</script>

<style scoped lang="scss">

</style>