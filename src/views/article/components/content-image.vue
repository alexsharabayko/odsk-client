<template>
  <div class="content-image">
    <div class="screen">
      <ul class="tape" :style="tapeStyle">
        <li class="item" v-for="item of data" :style="itemStyle">
          <img class="image" :src="item.url" :alt="item.alt">
        </li>
      </ul>
    </div>

    <ul class="panel" v-if="data.length > 1">
      <li v-for="item of data" :class="{item: true, active: item === activeItem}" @click="setActiveItem(item)">
        <img class="image" :src="item.url" :alt="item.alt">
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Watch} from "vue-property-decorator";
  import {NewsItemImageContent} from "../../../typings/news.typings";

  @Component
  export default class ContentImage {
    @Prop()
    public data!: NewsItemImageContent[];

    public activeItem!: NewsItemImageContent;

    get tapeStyle(): object {
      let index = this.data.indexOf(this.activeItem);

      if (index === -1) {
        index = 0;
      }

      return {
        width: `${this.data.length * 100}%`,
        transform: `translateX(-${100 / this.data.length * index}%)`,
      };
    }

    get itemStyle(): object {
      return {
        width: `${100 / this.data.length}%`,
      };
    }

    setActiveItem(item: NewsItemImageContent): void {
      this.activeItem = item;
    }

    @Watch("data", {immediate: true})
    public dataWatcher(): void {
      if (this.data.length && !this.data.includes(this.activeItem)) {
        this.activeItem = this.data[0];
      }
    }
  }
</script>

<style scoped lang="scss">
  .screen {
    overflow: hidden;
    font-size: 0;

    .tape {
      transition: all 0.2s ease-in-out;
    }

    .item {
      display: inline-block;
      vertical-align: middle;
    }

    .image {
      width: 100%;
    }
  }

  .panel {
    margin-top: 20px;
    padding: 10px;
    background-color: #f3f3f3;
    font-size: 0;

    .item {
      display: inline-block;
      margin: 0 5px;
      vertical-align: middle;
      width: 100px;
      border-radius: 3px;
      overflow: hidden;
      border: 2px solid transparent;
      transition: background-color 0.2s ease-in-out;

      &.active {
        border-color: #f9b707;
      }
    }

    .image {
      width: 100%;
    }
  }
</style>