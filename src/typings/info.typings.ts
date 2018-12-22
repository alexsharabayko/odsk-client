export interface CommunityPersonContacts {
  phone: string;
  email?: string;
  skype?: string;
}

export enum CommunityPersonPosition {
  CEO = 'ceo',
  ACCOUNTANT = 'accountant',
  PLUMBER = 'plumber',
  CLEANER = 'cleaner',
  ELECTRICIAN = 'electrician',
  JANITOR = 'janitor',
  OTHER = 'other',
}

export interface CommunityPersonWorkingHours {
  from: string;
  to: string;
}

export interface CommunityPerson {
  firstName: string;
  middleName?: string;
  lastName: string;
  contacts: CommunityPersonContacts;
  position: CommunityPersonPosition;
  workingHours: CommunityPersonWorkingHours;
  photoUrl: string;
}

export interface InfoState {
  persons: CommunityPerson[];
}

export const INFO_STORE_NAMESPACE = 'info';

export enum INFO_MUTATIONS {
  SET_PERSONS = 'SET_PERSONS',
}

export enum INFO_ACTIONS {
  FETCH_ALL = 'FETCH_ALL',
}
