export interface INewsItem {
  title: string;
  coverPhotoUrl: string;
  shortDescription: string;
}

export interface NewsState {
  news: INewsItem[];
}

export const NEWS_NAMESPACE = 'news';
