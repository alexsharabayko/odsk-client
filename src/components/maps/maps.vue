<template>
  <div ref="map"></div>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
  import {ymaps} from '../../libs/yandex-maps';
  import {InitMapParameters, Place} from '../../typings/places.typings';

  const yandexMaps = require('ymaps').default;

  declare const require: any;

  @Component
  export default class Maps extends Vue {
    @Prop()
    public initParameters: InitMapParameters;

    @Prop()
    public places: Place[];

    private mapElement: HTMLDivElement;
    private ymaps: ymaps;

    private currentMap: ymaps.Map;

    @Watch('initParameters', {immediate: true})
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

    @Watch('places', {immediate: true})
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
        type: 'yandex#map',
        controls: ['zoomControl'],
      }, {yandexMapDisablePoiInteractivity: true, suppressMapOpenBlock: true});

      this.currentMap.events.add('click', (event: ymaps.Event) => {
        console.log(event.get('coords'));
      });
    }

    private setMarkers(): void {
      if (this.currentMap && this.places) {
        this.currentMap.geoObjects.removeAll();

        this.places.forEach(place => {
          const placeMark = new this.ymaps.Placemark(place.coords, {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
          }, {
            iconLayout: this.getMarkerTemplate(),
          });

          this.currentMap.geoObjects
            .add(placeMark);
        })
      }
    }

    private getMarkerTemplate(): ymaps.IClassConstructor {
      return this.ymaps.templateLayoutFactory.createClass(Maps.getMarkerStr());
    }

    private static getMarkerStr(): string {
      return [
        `<svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">`,
        `<g transform="translate(0 -1028.4)">`,
        `<path d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" fill="#e74c3c" transform="translate(0 1028.4)"/>`,
        `<path d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" fill="#c0392b" transform="translate(0 1028.4)"/>`,
        `</g>`,
        `</svg>`
      ].join('');
    }
  }
</script>

<style scoped lang="scss">
</style>