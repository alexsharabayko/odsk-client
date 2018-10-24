<template>
  <div class="page-categories">
    <div class="category-button" @click="toggleOpened()">
      {{activeCategory ? activeCategory.title : 'Все категории'}} &#9662;
    </div>

    <ul :class="{hidden: !optionsOpened}" v-for="category of categories">
      <li :key="category.id" @click="setActiveCategory(category)">{{category.title}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import {Mutation, State} from "vuex-class";
  import {PlaceCategory, PLACES_STORE_NAMESPACE, SET_ACTIVE_CATEGORY_MUTATION} from "../../../typings/places.typings";

  @Component
  export default class PlaceCategories {
    @State('categories', {namespace: PLACES_STORE_NAMESPACE})
    public categories!: PlaceCategory[];

    @State('activeCategory', {namespace: PLACES_STORE_NAMESPACE})
    public activeCategory!: PlaceCategory;

    @Mutation(SET_ACTIVE_CATEGORY_MUTATION, {namespace: PLACES_STORE_NAMESPACE})
    private setActiveCategoryMutation: Function;

    public optionsOpened: boolean = false;

    public setActiveCategory(category: PlaceCategory): void {
      this.setActiveCategoryMutation(Object.assign({}, category));
    }

    public toggleOpened(value?: boolean): void {
      this.optionsOpened = value === undefined ? !this.optionsOpened : value;
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../styles/vars';

  .page-categories {
    position: absolute;
    top: 30px;
    left: 30px;
  }

  .category-button {
    padding: 15px 30px;
    background-color: $yellow;
    color: white;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
  }
</style>