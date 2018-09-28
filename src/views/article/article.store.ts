import {RootState} from '@/store';
import {ArticleState} from '@/views/article/article.typings';
import {INewsItem} from '@/views/news/news.typings';
import {Module} from 'vuex';

const articleStore: Module<ArticleState, RootState> = {
  mutations: {
    setArticle(state: ArticleState, newArticle: INewsItem): void {
      state.article = newArticle;
    },
  },
  actions: {
    fetchArticle()
  }
};

export default articleStore;
