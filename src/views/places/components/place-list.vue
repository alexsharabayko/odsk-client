<template>
  <ul>
    <li class="place" v-for="place of places">
      <h4 :style="{color: 'green'}">
        <font-awesome-icon icon="map-marker"></font-awesome-icon>
        {{place.name}}
      </h4>

      <place-working-hours v-if="place.workingHours" :workingHours="place.workingHours"></place-working-hours>

      <place-contacts v-if="place.contacts" :contacts="place.contacts"></place-contacts>
    </li>
  </ul>
</template>

<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";
  import {Place} from "../../../typings/places.typings";
  import PlaceContactsComponent from './place-contacts';
  import PlaceWorkingHoursComponent from './place-working-hours';
  @Component({
    components: {PlaceContacts: PlaceContactsComponent, PlaceWorkingHours: PlaceWorkingHoursComponent}
  })
  export default class PlaceList {
    @Prop()
    public places: Place[];
  }
</script>

<style scoped lang="scss">
  @import "../../../styles/vars";

  .place {
    padding: 10px;
    text-align: left;
    color: $black;

    h4 {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: lighter;
      line-height: 1.2;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
</style>