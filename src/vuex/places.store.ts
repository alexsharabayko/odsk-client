import {RootState} from '@/typings/common.typings';
import {
  CategoryByIdGetter,
  FETCH_ACTION, GET_CATEGORY_BY_ID, GET_PLACES_OF_ACTIVE_CATEGORY,
  InitMapParameters, Place, PlaceCategory,
  PlacesState, SET_ACTIVE_CATEGORY_MUTATION, SET_CATEGORIES_MUTATION,
  SET_INIT_PARAMETERS_MUTATION,
  SET_PLACES_MUTATION,
} from '@/typings/places.typings';
import Axios from 'axios';
import {Vue} from 'vue-property-decorator';
import {ActionContext, Module} from 'vuex';

export const placesStore: Module<PlacesState, RootState> = {
  namespaced: true,
  state: {
    initMapParameters: null,
    places: [],
    categories: [],
  },
  mutations: {
    [SET_PLACES_MUTATION](state: PlacesState, places: any[]): void {
      state.places = places;
    },

    [SET_INIT_PARAMETERS_MUTATION](state: PlacesState, initMapParameters: InitMapParameters): void {
      state.initMapParameters = initMapParameters;
    },

    [SET_CATEGORIES_MUTATION](state: PlacesState, categories: PlaceCategory[]): void {
      state.categories = categories;
    },

    [SET_ACTIVE_CATEGORY_MUTATION](state: PlacesState, category: PlaceCategory): void {
      Vue.set(state, 'activeCategory', category);
    },
  },
  getters: {
    [GET_CATEGORY_BY_ID](state: PlacesState): CategoryByIdGetter {
      return (id: number) => {
        return state.categories.find(c => c.id === id);
      };
    },
    [GET_PLACES_OF_ACTIVE_CATEGORY](state: PlacesState): Place[] {
      if (state.activeCategory) {
        return state.places.filter(p => state.activeCategory && p.categoryId === state.activeCategory.id);
      } else {
        return state.places;
      }
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
