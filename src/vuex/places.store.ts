import {RootState} from '@/typings/common.typings';
import {
  FETCH_ACTION,
  InitMapParameters,
  PlacesState,
  SET_INIT_PARAMETERS_MUTATION,
  SET_PLACES_MUTATION,
} from '@/typings/places.typings';
import Axios from 'axios';
import {ActionContext, Module} from 'vuex';

export const placesStore: Module<PlacesState, RootState> = {
  namespaced: true,
  state: {
    initMapParameters: null,
    places: [],
  },
  mutations: {
    [SET_PLACES_MUTATION](state: PlacesState, places: any[]): any {
      state.places = places;
    },

    [SET_INIT_PARAMETERS_MUTATION](state: PlacesState, initMapParameters: InitMapParameters): any {
      state.initMapParameters = initMapParameters;
    },
  },
  actions: {
    [FETCH_ACTION](store: ActionContext<PlacesState, RootState>): Promise<void> {
      return Axios.get<PlacesState>('/mocks-json/places-mock.json')
        .then(r => r.data)
        .then(data => {
          store.commit(SET_PLACES_MUTATION, data.places);
          store.commit(SET_INIT_PARAMETERS_MUTATION, data.initMapParameters);
        });
    },
  },
};
