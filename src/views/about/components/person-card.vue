import {CommunityPersonPosition} from "../../../typings/info.typings";
<template>
  <div class="main">
    <div class="ava">
      <img :src="person.photoUrl" alt="">
    </div>

    <div class="content">
      <h6 class="name">
        {{person.firstName}}
        <slot v-if="person.middleName">{{person.middleName}}</slot>
        {{person.lastName}}
      </h6>

      <div class="position" v-if="thereIsPosition">{{positionText}}</div>

      <a class="contact" :href="'tel:' + person.contacts.phone">
        <font-awesome-icon class="contact-icon" icon="phone"></font-awesome-icon>
        {{person.contacts.phone}}
      </a>

      <div class="add-contacts">
        <slot v-if="person.contacts.email">
          <a class="contact multi" :href="'mailto:' + person.contacts.email">
            <font-awesome-icon class="contact-icon" icon="envelope"></font-awesome-icon>
            {{person.contacts.email}}
          </a>
        </slot>

        <slot v-if="person.contacts.skype">
          <a class="contact multi" :href="'skype:' + person.contacts.skype">
            <font-awesome-icon class="contact-icon" icon="skype" prefix="fa"></font-awesome-icon>
            {{person.contacts.skype}}
          </a>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";
  import {CommunityPerson, CommunityPersonPosition} from "../../../typings/info.typings";

  @Component
  export default class PersonCard {
    private static readonly POSITION_NAMES = {
      [CommunityPersonPosition.CEO]: "Председатель",
      [CommunityPersonPosition.ACCOUNTANT]: "Бухгалтер",
      [CommunityPersonPosition.PLUMBER]: "Сантехник",
      [CommunityPersonPosition.ELECTRICIAN]: "Электрик",
      [CommunityPersonPosition.CLEANER]: "Уборщик",
      [CommunityPersonPosition.JANITOR]: "Дворник",
    };

    @Prop()
    public person: CommunityPerson;

    public get thereIsPosition(): boolean {
      return this.person.position !== CommunityPersonPosition.OTHER;
    }

    public get positionText(): string {
      return PersonCard.POSITION_NAMES[this.person.position];
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../styles/vars";

  $contentMarginBottom: 15px;
  $avaSize: 150px;

  .main {
    display: flex;
  }

  .ava {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    width: $avaSize;
    height: $avaSize;
    border-radius: 50%;
    font-size: 0;

    img {
      display: inline-block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  .content {
    text-align: left;
  }

  .name {
    margin-bottom: $contentMarginBottom;
    color: $black;
    font-size: 20px;
    font-weight: bold;
  }

  .position {
    display: inline-block;
    padding: 2px 5px;
    margin-bottom: $contentMarginBottom;
    background-color: $yellow;
    color: white;
    font-style: italic;
    font-size: 20px;
  }

  .contact {
    display: block;
    margin-bottom: $contentMarginBottom;
    color: $black;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: $yellow;
    }

    &-icon {
      color: $yellow;
    }

    &.multi {
      display: inline-block;
      margin-right: 15px;
    }
  }
</style>