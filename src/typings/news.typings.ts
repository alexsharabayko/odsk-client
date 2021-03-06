export enum NewsItemContentItemType {
  PARAGRAPH = 'p',
  IMAGE = 'image',
  LINK = 'link',
}

export enum NewsItemTextContentType {
  REGULAR = 'regular',
  BOLD = 'bold',
  ITALIC = 'italic',
  LINK = 'link',
}

export interface NewsItemTextContent {
  type: NewsItemTextContentType;
  text: string;
  link?: {
    href: string;
    target?: string;
  };
}

export interface NewsItemImageContent {
  url: string;
  alt: string;
}

export interface NewsItemLinkContent {
  title: string;
  href: string;
  target?: string;
}

export interface NewsItemContentItem {
  type: NewsItemContentItemType;
  data: NewsItemTextContent[] | NewsItemImageContent[] | NewsItemLinkContent;
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
