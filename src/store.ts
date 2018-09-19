import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';

Vue.use(Vuex);

export interface RootState {
  pageTitle: string;
}

const store: StoreOptions<RootState> = {
  state: {
    pageTitle: 'ODSK',
  },
  mutations: {
    setPageTitle(state, payload) {
      state.pageTitle = payload.title;
    },
  },
  actions: {
  },
};

export default new Vuex.Store(store);
