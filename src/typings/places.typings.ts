export enum MapParametersMapType {
  MAP = 'map',
  SATELLITE = 'satellite',
  HYBRID = 'hybrid',
}

export enum MapParametersControl {
  FULL_SCREEN_CONTROL = 'fullscreenControl',
  GEOLOCATION_CONTROL = 'geolocationControl',
  ROUTE_EDITOR = 'routeEditor',
  RULER_CONTROL = 'rulerControl',
  SEARCH_CONTROL = 'searchControl',
  TRAFFIC_CONTROL = 'trafficControl',
  TYPE_SELECTOR = 'typeSelector',
  ZOOM_CONTROL = 'zoomControl',
  SMALL_MAP_DEFAULT_SET = 'smallMapDefaultSet',
  MEDIUM_MAP_DEFAULT_SET = 'mediumMapDefaultSet',
  LARGE_MAP_DEFAULT_SET = 'largeMapDefaultSet',
  DEFAULT = 'default',
}

export interface InitMapParameters {
  coords: number[];
  zoom: number;
  controls: MapParametersControl[];
  mapType: MapParametersMapType;
}

export interface PlaceCategory {
  id: number;
  title: string;
  color: string;
}

export interface Place {
  id: number;
  categoryId: number;
  name: string;
  coords: number[];
}

export interface PlacesState {
  initMapParameters: InitMapParameters | null;
  places: Place[];
  categories: PlaceCategory[];
}

export const PLACES_STORE_NAMESPACE = 'PLACES_STORE_NAMESPACE';

export const SET_PLACES_MUTATION = 'SET_PLACES_MUTATION';
export const SET_INIT_PARAMETERS_MUTATION = 'SET_INIT_PARAMETERS_MUTATION';
export const SET_CATEGORIES_MUTATION = 'SET_CATEGORIES_MUTATION';

export const FETCH_ACTION = 'FETCH_ACTION';
