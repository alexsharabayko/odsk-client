import {APP_ELEMENT_MODE} from "./typings/common.typings";
import {APP_ELEMENT_MODE} from "./typings/common.typings";
<template>
  <div id="app" :class="['app'].concat(appElementClass)">
    <main-header></main-header>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import {State} from "vuex-class";
  import MainHeader from "./components/main-header/main-header.vue";
  import {APP_ELEMENT_MODE} from "./typings/common.typings";

  @Component({
    components: {MainHeader},
  })
  export default class App {
    @State('appElementMode')
    public appElementMode!: APP_ELEMENT_MODE;

    get appElementClass(): string[] {
      switch (this.appElementMode) {
        case APP_ELEMENT_MODE.HEIGHT_100:
          return ['height-100'];
        case APP_ELEMENT_MODE.DEFAULT:
        default:
          return [];
      }
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/reset-css/reset.css";
  @import "styles/common";

  .app {
    &.height-100 {
      display: flex;
      flex-direction: column;
      height: 100%;

      .page {
        flex-grow: 1;
      }
    }
  }
</style>
