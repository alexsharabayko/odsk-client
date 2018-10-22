<template>
  <div class="page">
    <div class="map-wrapper" ref="map"></div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {Action, State} from "vuex-class";
  import {ymaps} from '../../libs/yandex-maps';
  import {FETCH_ACTION, InitMapParameters, PLACES_STORE_NAMESPACE} from "../../typings/places.typings";
  const yandexMaps = require('ymaps').default;

  declare const require: any;

  @Component({})
  export default class Places extends Vue {
    @State("initMapParameters", {namespace: PLACES_STORE_NAMESPACE})
    public initMapParameters!: InitMapParameters;

    @Action(FETCH_ACTION, {namespace: PLACES_STORE_NAMESPACE})
    private fetchAll!: () => Promise<void>;

    private mapElement: HTMLDivElement;
    private ymaps: ymaps;

    public mounted(): void {
      this.mapElement = this.$refs.map as HTMLDivElement;

      const fetchPromise = this.fetchAll();
      const mapsPromise = yandexMaps.load() as Promise<any>;

      Promise.all([mapsPromise, fetchPromise])
        .then(args => {
          this.ymaps = args[0];
          this.installMap();
        });
    }

    private installMap(): void {
      new this.ymaps.Map(this.mapElement, {
        center: this.initMapParameters.coords,
        zoom: this.initMapParameters.zoom,
        type: 'yandex#map',
        controls: ['zoomControl'],
      }, {yandexMapDisablePoiInteractivity: true, suppressMapOpenBlock: true});
    }
  }
</script>

<style scoped lang="scss">
  .page {
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