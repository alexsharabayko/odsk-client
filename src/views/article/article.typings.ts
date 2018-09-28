import {INewsItem} from '@/views/news/news.typings';

export const ARTICLE_NAMESPACE = 'articles';

export interface ArticleState {
  article: INewsItem;
}
