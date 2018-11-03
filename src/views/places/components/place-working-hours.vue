<template>
  <ul>
    <h5>Время работы</h5>
    <li v-for="(hourItem, i) of processedWorkingHours">
      <span class="day-name">{{dayNames[i]}}</span>
      <slot v-if="isWeekend(hourItem)">Выходной</slot>
      <slot v-if="isWorkingDay(hourItem)">
        {{hourItem.from}} - {{hourItem.to}}
      </slot>
    </li>
  </ul>
</template>

<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";
  import {State} from 'vuex-class';
  import {PlaceWorkingHours, PlaceWorkingHoursDeclineReason} from "../../../typings/places.typings";

  @Component
  export default class PlaceWorkingHoursComponent {
    @Prop()
    public workingHours: PlaceWorkingHours[];

    @State('dayNames')
    public dayNames: string[];

    public isWeekend(hours: PlaceWorkingHours): boolean {
      return typeof hours === "string" && hours === PlaceWorkingHoursDeclineReason.WEEKEND;
    }

    public isWorkingDay(hours: PlaceWorkingHours): boolean {
      return typeof hours !== "string";
    }

    get processedWorkingHours(): PlaceWorkingHours[] {
      switch (this.workingHours.length) {
        case 1:
          return Array(7).fill(this.workingHours[0]);
        case 2:
          return Array(5).fill(this.workingHours[0])
            .concat(Array(2).fill(this.workingHours[1]));
        case 3:
          return Array(5).fill(this.workingHours[0])
            .concat(this.workingHours[1])
            .concat(this.workingHours[2]);
        default:
          return this.workingHours;
      }
    }
  }
</script>

<style scoped lang="scss">

</style>