<template>
  <div class="page">
    <slot v-if="initMapParameters">
      <maps class="map-wrapper" :initParameters="initMapParameters" :places="places"></maps>
    </slot>

    <place-categories></place-categories>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {Action, State} from "vuex-class";
  import Maps from "../../components/maps/maps";
  import {FETCH_ACTION, InitMapParameters, Place, PLACES_STORE_NAMESPACE} from "../../typings/places.typings";
  import PlaceCategories from "./components/place-categories";

  @Component({
    components: {Maps, PlaceCategories}
  })
  export default class Places extends Vue {
    @State("initMapParameters", {namespace: PLACES_STORE_NAMESPACE})
    public initMapParameters!: InitMapParameters;

    @State("places", {namespace: PLACES_STORE_NAMESPACE})
    public places!: Place[];

    @Action(FETCH_ACTION, {namespace: PLACES_STORE_NAMESPACE})
    private fetchAll!: () => Promise<void>;

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