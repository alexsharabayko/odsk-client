export type DateFormatTypes = 'date' | 'time' | 'dateTime';

export interface RootState {
  pageTitle: string;
  isSimpleHeader: boolean;
}

export const SET_HEADER_MODE_MUTATION = 'SET_HEADER_MODE_MUTATION';
