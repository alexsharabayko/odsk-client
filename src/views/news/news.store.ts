import {RootState} from '@/store';
import {NewsState} from '@/views/news/news.typings';
import Axios from 'axios';
import {Module} from 'vuex';

export const news: Module<NewsState, RootState> = {
  namespaced: true,
  state: {
    news: [],
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
    },
  },
  actions: {
    fetchNews(store) {
      Axios.get('news-mock.json')
        .then(r => r.data.data)
        .then(news => store.commit('setNews', news));
    },
  },
};
