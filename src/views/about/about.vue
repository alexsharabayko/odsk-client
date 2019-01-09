<template>
  <div class="page">
    <h2 class="page-title">
      <span class="text">Информация</span>
    </h2>

    <ul class="persons">
      <li class="item" v-for="person of persons">
        <person-card :person="person"></person-card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator";
  import {Action, State} from "vuex-class";
  import {CommunityPerson, INFO_ACTIONS, INFO_STORE_NAMESPACE} from "../../typings/info.typings";
  import PersonCard from "./components/person-card";

  @Component({
    components: {PersonCard}
  })
  export default class About {
    @State("persons", {namespace: INFO_STORE_NAMESPACE})
    private persons!: CommunityPerson[];

    @Action(INFO_ACTIONS.FETCH_ALL, {namespace: INFO_STORE_NAMESPACE})
    private fetchAll!: Function;

    public mounted() {
      this.fetchAll();
    }
  }
</script>

<style scoped lang="scss">
  .page-title {
    margin-bottom: 50px;
  }

  .persons {
    display: flex;
    flex-wrap: wrap;

    > .item {
      width: 50%;
      margin-bottom: 30px;
    }
  }
</style>