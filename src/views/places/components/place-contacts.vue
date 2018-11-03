<template>
  <ul>
    <h5>Контакты</h5>
    <li v-for="contact of contacts">
      <div>{{contact.title}}</div>

      <slot v-if="contact.phoneNumbers">
        <slot v-for="phoneNumber of contact.phoneNumbers">
          <a :href="'tel:' + phoneNumber">{{phoneNumber}}</a>
        </slot>
      </slot>

      <slot v-if="contact.emails">
        <slot v-for="email of contact.emails">
          <a :href="'mailto:' + email">{{email}}</a>
        </slot>
      </slot>

      <slot v-if="contact.skype">
        <a :href="'skype:' + contact.skype">{{contact.skype}}</a>
      </slot>
    </li>
  </ul>
</template>

<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";
  import {PlaceContacts} from '../../../typings/places.typings';

  @Component
  export default class PlaceContactsComponent {
    @Prop()
    public contacts: PlaceContacts[];
  }
</script>

<style scoped lang="scss">

</style>