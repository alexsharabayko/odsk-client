import {RootState, SET_HEADER_MODE_MUTATION} from '@/typings/common.typings';
import {NEWS_STORE_NAMESPACE} from '@/typings/news.typings';
import {newsStore} from '@/vuex/news.store';
import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    pageTitle: 'ODSK',
    isSimpleHeader: false,
  },
  mutations: {
    setPageTitle(state, payload) {
      state.pageTitle = payload;
    },

    [SET_HEADER_MODE_MUTATION](state: RootState, payload: boolean): void {
      state.isSimpleHeader = payload;
    },
  },
  modules: {
    [NEWS_STORE_NAMESPACE]: newsStore,
  },
};

export default new Vuex.Store(store);
