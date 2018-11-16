<template>
  <div class="page">
    <slot v-if="initMapParameters">
      <maps class="map-wrapper" :initParameters="initMapParameters" :places="activePlaces"></maps>
    </slot>

    <!--<place-list class="place-list" :places="activePlaces"></place-list>-->

    <place-categories></place-categories>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {Action, Getter, State} from "vuex-class";
  import Maps from "../../components/maps/maps";
  import {FETCH_ACTION, GET_PLACES_OF_ACTIVE_CATEGORY, InitMapParameters, Place, PLACES_STORE_NAMESPACE} from "../../typings/places.typings";
  import PlaceCategories from "./components/place-categories";
  import PlaceList from './components/place-list';
  @Component({
    components: {PlaceList, Maps, PlaceCategories}
  })
  export default class Places extends Vue {
    @State("initMapParameters", {namespace: PLACES_STORE_NAMESPACE})
    public initMapParameters!: InitMapParameters;

    @Action(FETCH_ACTION, {namespace: PLACES_STORE_NAMESPACE})
    private fetchAll!: () => Promise<void>;

    @Getter(GET_PLACES_OF_ACTIVE_CATEGORY, {namespace: PLACES_STORE_NAMESPACE})
    public activePlaces: Place[];

    public mounted(): void {
      this.fetchAll();
    }
  }
</script>

<style scoped lang="scss">
  $list-width: 0%;

  .page {
    position: relative;
    display: flex;
    padding: 0;

    > section {
      flex-grow: 1;
    }
  }

  .map-wrapper {
    width: 100% - $list-width;
  }

  .place-list {
    width: $list-width;
    flex: 1 1 auto;
    overflow: auto;
  }
</style>