import {NewsItemTextContentType} from "../../../typings/news.typings";
import {NewsItemTextContentType} from "../../../typings/news.typings";
import {NewsItemTextContentType} from "../../../typings/news.typings";
<template>
  <p class="content-text" v-html="viewData"></p>
</template>

<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";
  import {NewsItemTextContent, NewsItemTextContentType} from "../../../typings/news.typings";

  @Component
  export default class ContentText {
    @Prop()
    public data!: NewsItemTextContent[];

    get viewData(): string {
      return this.data
        .map(ContentText.mapItemToText)
        .join(" ");
    }

    private static mapItemToText(item: NewsItemTextContent): string {
      switch (item.type) {
        case NewsItemTextContentType.REGULAR:
          return item.text;
        case NewsItemTextContentType.BOLD:
          return `<span class="text-bold">${item.text}</span>`;
        case NewsItemTextContentType.ITALIC:
          return `<span class="text-italic">${item.text}</span>`;
        case NewsItemTextContentType.LINK:
          return `<a class="color-yellow" href="${item.link.href}" target="_blank">${item.text}</a>`;
        default:
          return '';
      }
    }
  }
</script>

<style scoped lang="scss">
  .content-text {
    color: #888;
    font-size: 18px;
    line-height: 1.4;
    text-align: justify;
  }
</style>