import {DateFormatTypes} from '@/typings/common.typings';

export const dateFormatFilter = (date: Date, type: DateFormatTypes = 'date') => {
  switch (type) {
    case 'date':
      return date.toLocaleDateString();
    case 'time':
      return date.toLocaleTimeString();
    case 'dateTime':
      return date.toLocaleString();
  }
};
