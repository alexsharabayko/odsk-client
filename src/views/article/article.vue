<template>
  <div class="page">
    <slot v-if="article">
      <h2 class="page-title">
        <span class="text">{{article.title}}</span>
      </h2>

      <div class="meta-info">
        <span class="date">{{article.createDate | dateFormat}}</span>
        <span class="author">Автор: {{article.author}}</span>
      </div>

      <div>
        <img class="cover-img" :src="article.coverPhotoUrl" alt="">
      </div>

      <ul>
        <li class="content-item" v-for="contentItem of article.content">
          <slot v-if="contentItem.type === 'text'">
            <content-text :data="contentItem.data"></content-text>
          </slot>
          <slot v-if="contentItem.type === 'image'">
            <content-image :data="contentItem.data"></content-image>
          </slot>
        </li>
      </ul>
    </slot>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from "vue-property-decorator";
  import {Action, State} from "vuex-class";
  import {FETCH_ARTICLE_ACTION, FetchArticlePayload, INewsItem, NEWS_STORE_NAMESPACE} from "../../typings/news.typings";
  import ContentImage from './components/content-image';
  import ContentText from './components/content-text';

  @Component({
    components: {ContentImage, ContentText}
  })
  export default class Article {
    @Prop()
    public id: string;

    @State("article", {namespace: NEWS_STORE_NAMESPACE})
    private article: INewsItem;

    @Action(FETCH_ARTICLE_ACTION, {namespace: NEWS_STORE_NAMESPACE})
    private fetchArticle: (payload: FetchArticlePayload) => any;

    @Watch("article")
    private callback(o: INewsItem): void {
      console.log(o.createDate);
    }

    mounted(): void {
      this.fetchArticle({id: parseInt(this.id, 10)});
    }
  }
</script>

<style scoped lang="scss">
  $yellow: #f9b707;

  .page {
    margin: 0 auto;
    width: 65%;
    padding-left: 0;
    padding-right: 0;
  }

  .page-title {
    .text {
      &:before {
        width: 65px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .meta-info {
    margin-top: 20px;
    font-style: italic;

    .date {
      color: $yellow;
    }

    .author {
      margin-left: 10px;
    }
  }

  .cover-img {
    margin-top: 30px;
    width: 100%;
  }

  .content-item {
    margin-top: 30px;
  }
</style>