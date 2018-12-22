import {
  APP_ELEMENT_MODE,
  RootState,
  SET_APP_ELEMENT_MODE_MUTATION,
  SET_HEADER_MODE_MUTATION
} from '@/typings/common.typings';
import {INFO_STORE_NAMESPACE} from '@/typings/info.typings';
import {NEWS_STORE_NAMESPACE} from '@/typings/news.typings';
import {PLACES_STORE_NAMESPACE} from '@/typings/places.typings';
import {infoStore} from '@/vuex/info.store';
import {newsStore} from '@/vuex/news.store';
import {placesStore} from '@/vuex/places.store';
import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    isSimpleHeader: false,
    appElementMode: APP_ELEMENT_MODE.DEFAULT,
    dayNames: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  },
  mutations: {
    [SET_HEADER_MODE_MUTATION](state: RootState, payload: boolean): void {
      state.isSimpleHeader = payload;
    },

    [SET_APP_ELEMENT_MODE_MUTATION](state: RootState, payload: APP_ELEMENT_MODE) {
      state.appElementMode = payload;
    },
  },
  modules: {
    [NEWS_STORE_NAMESPACE]: newsStore,
    [PLACES_STORE_NAMESPACE]: placesStore,
    [INFO_STORE_NAMESPACE]: infoStore,
  },
};

export default new Vuex.Store(store);
