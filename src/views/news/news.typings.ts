export interface NewsItem {
  title: string;
  coverPhotoUrl: string;
  shortDescription: string;
}

export interface NewsState {
  news: NewsItem[];
}

export const NEWS_NAMESPACE = 'news';
