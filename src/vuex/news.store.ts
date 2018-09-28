import {RootState} from '@/typings/common.typings';
import {
  FETCH_ARTICLE_ACTION,
  FETCH_NEWS_ACTION,
  FetchArticlePayload,
  INewsItem,
  NewsState,
  SET_ARTICLE_MUTATION,
  SET_NEWS_MUTATION,
} from '@/typings/news.typings';
import Axios from 'axios';
import {ActionContext, Module} from 'vuex';

const fetchNewsMock = (): Promise<INewsItem[]> => {
  return Axios.get<INewsItem[]>('/mocks-json/news-mock.json')
    .then(r => r.data);
};

export const newsStore: Module<NewsState, RootState> = {
  namespaced: true,
  state: {
    news: [],
    article: null,
  },
  mutations: {
    [SET_NEWS_MUTATION](state: NewsState, newsData: INewsItem[]): any {
      state.news = newsData;
    },

    [SET_ARTICLE_MUTATION](state: NewsState, article: INewsItem): any {
      state.article = article;
    },
  },
  actions: {
    [FETCH_NEWS_ACTION](store: ActionContext<NewsState, RootState>): Promise<any> {
      return fetchNewsMock()
        .then(newsData => store.commit(SET_NEWS_MUTATION, newsData));
    },

    [FETCH_ARTICLE_ACTION](store: ActionContext<NewsState, RootState>, payload: FetchArticlePayload): any {
      const localArticle = store.state.news.find(i => i.id === payload.id);

      if (localArticle) {
        store.commit(SET_ARTICLE_MUTATION, localArticle);
      } else {
        store.dispatch(FETCH_NEWS_ACTION)
          .then(() => store.dispatch(FETCH_ARTICLE_ACTION, payload));
      }
    },
  },
};
