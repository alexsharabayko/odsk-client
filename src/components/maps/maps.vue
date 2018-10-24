<template>
  <div ref="map"></div>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from "vue-property-decorator";
  import {Getter} from 'vuex-class';
  import {ymaps} from "../../libs/yandex-maps";
  import {CategoryByIdGetter, GET_CATEGORY_BY_ID, InitMapParameters, Place, PLACES_STORE_NAMESPACE} from "../../typings/places.typings";
  import {getMarkerStr} from './maps.utils';

  const yandexMaps = require("ymaps").default;

  declare const require: any;

  @Component
  export default class Maps extends Vue {
    @Prop()
    public initParameters: InitMapParameters;

    @Prop()
    public places: Place[];

    @Getter(GET_CATEGORY_BY_ID, {namespace: PLACES_STORE_NAMESPACE})
    public categoryGetter: CategoryByIdGetter;

    private mapElement: HTMLDivElement;
    private ymaps: ymaps;

    private currentMap: ymaps.Map;

    @Watch("initParameters", {immediate: true})
    private mapRunner(): void {
      setTimeout(() => {
        this.mapElement = this.$refs.map as HTMLDivElement;

        if (this.initParameters && this.mapElement) {
          yandexMaps.load().then(maps => {
            this.ymaps = maps;
            this.buildMap();
            this.setMarkers();
          });
        }
      });
    }

    @Watch("places", {immediate: true})
    private placesWatcher(): void {
      this.setMarkers();
    }

    private buildMap(): void {
      this.installMap();
    }

    private installMap(): void {
      this.currentMap && this.currentMap.destroy();

      this.currentMap = new this.ymaps.Map(this.mapElement, {
        center: this.initParameters.coords,
        zoom: this.initParameters.zoom,
        type: "yandex#map",
        controls: ["zoomControl"],
      }, {yandexMapDisablePoiInteractivity: true, suppressMapOpenBlock: true});

      this.currentMap.events.add("click", (event: ymaps.Event) => {
        console.log(event.get("coords"));
      });
    }

    private setMarkers(): void {
      if (this.currentMap && this.places) {
        this.currentMap.geoObjects.removeAll();

        this.places.forEach(place => {
          const placeMark = new this.ymaps.Placemark(place.coords, {
            hintContent: "Собственный значок метки",
            balloonContent: "Это красивая метка"
          }, {
            iconLayout: this.getMarkerTemplate(this.categoryGetter(place.categoryId).color),
            iconOffset: [-24, -48],
          });

          this.currentMap.geoObjects
            .add(placeMark);
        });
      }
    }

    private getMarkerTemplate(color: string): ymaps.IClassConstructor {
      return this.ymaps.templateLayoutFactory.createClass(getMarkerStr(color));
    }
  }
</script>

<style scoped lang="scss">
</style>