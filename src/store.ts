import {ARTICLE_NAMESPACE} from '@/views/article/article.typings';
import news from '@/views/news/news.store';
import article from '@/views/article/article.store';
import {NEWS_NAMESPACE} from '@/views/news/news.typings';
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
      state.pageTitle = payload;
    },
  },
  modules: {
    [NEWS_NAMESPACE]: news,
    [ARTICLE_NAMESPACE]: article,
  },
};

export default new Vuex.Store(store);
