export type NewsItemContentItemType = 'text' | 'image';

export interface NewsItemImageContent {
  url: string;
  alt: string;
}

export interface NewsItemContentItem {
  type: NewsItemContentItemType;
  data: string[] | NewsItemImageContent[];
}

export interface INewsItemDto {
  id: number;
  title: string;
  coverPhotoUrl: string;
  shortDescription: string;
  author: string;
  createDate: string;
  content: NewsItemContentItem[];
}

export interface INewsItem {
  id: number;
  title: string;
  coverPhotoUrl: string;
  shortDescription: string;
  author: string;
  createDate: Date;
  content: NewsItemContentItem[];
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
