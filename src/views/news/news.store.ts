import {RootState} from '@/store';
import {INewsItem, NewsState} from '@/views/news/news.typings';
import Axios from 'axios';
import {ActionContext, Module} from 'vuex';

const newsStore: Module<NewsState, RootState> = {
  namespaced: true,
  state: {
    news: [],
  },
  mutations: {
    setNews(state: NewsState, newsData: INewsItem[]) {
      state.news = newsData;
    },
  },
  actions: {
    fetchNews(store: ActionContext<NewsState, RootState>) {
      Axios.get('mocks-json/news-mock.json')
        .then((r) => r.data.data)
        .then((newsData) => store.commit('setNews', newsData));
    },
  },
};

export default newsStore;
