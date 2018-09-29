export interface INewsItemDto {
  id: number;
  title: string;
  coverPhotoUrl: string;
  shortDescription: string;
  author: string;
  createDate: string;
}

export interface INewsItem {
  id: number;
  title: string;
  coverPhotoUrl: string;
  shortDescription: string;
  author: string;
  createDate: Date;
}

export interface NewsState {
  news: INewsItem[];
  article: INewsItem | null;
}

export interface FetchArticlePayload {
  id: number;
}

export const NEWS_STORE_NAMESPACE = 'news';

export const SET_NEWS_MUTATION = 'SET_NEWS_MUTATION';
export const SET_ARTICLE_MUTATION = 'SET_ARTICLE_MUTATION';

export const FETCH_NEWS_ACTION = 'FETCH_NEWS_ACTION';
export const FETCH_ARTICLE_ACTION = 'FETCH_ARTICLE_ACTION';
