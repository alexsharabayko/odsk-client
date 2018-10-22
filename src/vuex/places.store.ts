import {RootState} from '@/typings/common.typings';
import {
  FETCH_ACTION,
  InitMapParameters, PlaceCategory,
  PlacesState, SET_CATEGORIES_MUTATION,
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
    categories: [],
  },
  mutations: {
    [SET_PLACES_MUTATION](state: PlacesState, places: any[]): any {
      state.places = places;
    },

    [SET_INIT_PARAMETERS_MUTATION](state: PlacesState, initMapParameters: InitMapParameters): any {
      state.initMapParameters = initMapParameters;
    },

    [SET_CATEGORIES_MUTATION](state: PlacesState, categories: PlaceCategory[]): any {
      state.categories = categories;
    },
  },
  actions: {
    [FETCH_ACTION](store: ActionContext<PlacesState, RootState>): Promise<void> {
      return Axios.get<PlacesState>('/mocks-json/places-mock.json')
        .then(r => r.data)
        .then(data => {
          store.commit(SET_PLACES_MUTATION, data.places);
          store.commit(SET_CATEGORIES_MUTATION, data.categories);
          store.commit(SET_INIT_PARAMETERS_MUTATION, data.initMapParameters);
        });
    },
  },
};
