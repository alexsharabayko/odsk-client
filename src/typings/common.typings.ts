export type DateFormatTypes = 'date' | 'time' | 'dateTime';

export enum APP_ELEMENT_MODE {
  DEFAULT = 'default',
  HEIGHT_100 = 'height-100',
}

export interface RootState {
  isSimpleHeader: boolean;
  appElementMode: APP_ELEMENT_MODE;
  dayNames: string[];
}

export const SET_HEADER_MODE_MUTATION = 'SET_HEADER_MODE_MUTATION';
export const SET_APP_ELEMENT_MODE_MUTATION = 'SET_APP_ELEMENT_MODE_MUTATION';
