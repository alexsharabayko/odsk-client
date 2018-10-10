<template>
  <div class="page">
    <slot v-if="initMapParameters">
      <yandex-map
          :coords="initMapParameters.coords"
          :zoom="initMapParameters.zoom"
          :controls="initMapParameters.controls"
          :map-type="initMapParameters.mapType"
          @map-was-initialized="onMapInit"
      >

        <ymap-marker
            marker-id="1"
            marker-type="placemark"
            :coords="initMapParameters.coords"
            hint-content="Hint content 1"
            :balloon="{header: 'header', body: 'body', footer: 'footer'}"
            :icon="{color: 'green', glyph: 'home'}"
            cluster-name="1"
        ></ymap-marker>

        <ymap-marker
            marker-id="2"
            marker-type="placemark"
            :coords="[54.6, 39.8]"
            hint-content="Hint content 1"
            :balloon="{header: 'header', body: 'body', footer: 'footer'}"
            :icon="{color: 'green', glyph: 'cinema'}"
            cluster-name="1"
        ></ymap-marker>

        <ymap-marker
            marker-id="3"
            marker-type="circle"
            :coords="[54.62896654088406, 39.731893822753904]"
            circle-radius="1600"
            hint-content="Hint content 1"
            :marker-fill="{color: '#000000', opacity: 0.4}"
            :marker-stroke="{color: '#ff0000', width: 5}"
            :balloon="{header: 'header', body: 'body', footer: 'footer'}"
        ></ymap-marker>

      </yandex-map>
    </slot>
  </div>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import {Action, State} from "vuex-class";
  import {FETCH_ACTION, InitMapParameters, PLACES_STORE_NAMESPACE} from "../../typings/places.typings";

  import ymaps from 'ymaps';

  const {yandexMap, ymapMarker} = require("vue-yandex-maps");

  @Component({
    components: {
      yandexMap, ymapMarker
    },
  })
  export default class Places {
    @State("initMapParameters", {namespace: PLACES_STORE_NAMESPACE})
    public initMapParameters!: InitMapParameters;

    @Action(FETCH_ACTION, {namespace: PLACES_STORE_NAMESPACE})
    private fetchAll!: Function;

    constructor() {
    }

    public onMapInit(instance: any): void {
      instance.events.add("click", (event: any) => {
        console.log(event.get("coords"));
        console.log(event.get("zoom"));
      });
    }

    public mounted(): void {
      this.fetchAll();
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
</style>