import {RootState} from '@/typings/common.typings';
import {CommunityPerson, INFO_ACTIONS, INFO_MUTATIONS, InfoState} from '@/typings/info.typings';
import Axios from 'axios';
import {ActionContext, Module} from 'vuex';

export const fetchInfo = (): Promise<InfoState> => {
  return Axios.get<InfoState>('/mocks-json/info-mock.json')
    .then(r => r.data);
};

export const infoStore: Module<InfoState, RootState> = {
  namespaced: true,
  state: {
    persons: [],
  },
  mutations: {
    [INFO_MUTATIONS.SET_PERSONS](state: InfoState, persons: CommunityPerson[]): void {
      state.persons = persons;
    },
  },
  actions: {
    [INFO_ACTIONS.FETCH_ALL](store: ActionContext<InfoState, RootState>): Promise<any> {
      return fetchInfo()
        .then(newsData => store.commit(INFO_MUTATIONS.SET_PERSONS, newsData.persons));
    },
  },
};
