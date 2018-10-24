<template>
  <div class="page">
    <slot v-if="initMapParameters">
      <maps class="map-wrapper" :initParameters="initMapParameters" :places="activePlaces"></maps>
    </slot>

    <place-categories></place-categories>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {Action, Getter, State} from "vuex-class";
  import Maps from "../../components/maps/maps";
  import {FETCH_ACTION, GET_PLACES_OF_ACTIVE_CATEGORY, InitMapParameters, Place, PLACES_STORE_NAMESPACE} from "../../typings/places.typings";
  import PlaceCategories from "./components/place-categories";

  @Component({
    components: {Maps, PlaceCategories}
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
  .page {
    position: relative;
    display: flex;
    padding: 0;

    > section {
      flex-grow: 1;
    }
  }

  .map-wrapper {
    flex-grow: 1;
  }
</style>