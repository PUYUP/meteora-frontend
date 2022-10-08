import { Action, createReducer, on } from '@ngrx/store';
import {
  createListing,
  createListingFailure,
  createListingSuccess,
  loadListing,
  loadListingFailure,
  loadListings,
  loadListingsFailure,
  loadListingsSuccess,
  loadListingSuccess,
  resetListing,
  updateListing,
  updateListingFailure,
  updateListingSuccess,
} from '../../actions/listing/listing.actions';

export const FeederListingFeatureKey = 'feeder_listing';

export interface FeederListingState {
  data: any;
  error: any;
  status: string;
  action?: string;
}

export const initialState: FeederListingState = {
  data: {},
  error: null,
  status: 'init',
};

export const reducer = createReducer(
  initialState,

  // LOADS
  on(loadListings, (state, payload) => {
    return {
      ...state,

      // infinite scroll
      // data: payload?.isLoadMore ? state.data : {},

      // pagination
      data: {},

      error: null,
      status: 'loading',
      action: 'load',
      isLoadMore: payload?.isLoadMore,
    };
  }),
  on(loadListingsSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadListingsFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // LOAD
  on(loadListing, (state, payload) => {
    return {
      ...state,
      error: null,
      status: 'loading',
      action: 'load',
    };
  }),
  on(loadListingSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadListingFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // CREATE
  on(createListing, (state) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'loading',
      error: null,
      action: 'create',
    };
  }),
  on(createListingSuccess, (state, payload) => {
    let results = state?.data?.results || [];
    let index = results.findIndex((d: any) => d.label == payload?.data?.label);
    let newResults: any = [];

    if (index == -1) {
      newResults = [payload?.data, ...results];
    } else {
      newResults = results.map((d: any) => {
        if (d.label == payload?.data.label) {
          d = payload?.data;
        }

        return d;
      });
    }

    return {
      ...state,
      data: {
        ...state.data,
        results: newResults,
      },
      status: 'loaded',
      error: null,
    };
  }),
  on(createListingFailure, (state, payload) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'init',
      error: payload?.error,
    };
  }),
  on(resetListing, (state) => {
    return {
      ...state,
      status: 'init',
      action: '',
    };
  }),

  // UPDATE
  on(updateListing, (state, payload) => {
    return {
      ...state,
      status: 'loading',
      action: 'update',
    };
  }),
  on(updateListingSuccess, (state, payload) => {
    return {
      ...state,
      status: 'loaded',
      data: { ...payload.data },
      error: null,
    };
  }),
  on(updateListingFailure, (state, payload) => {
    return {
      ...state,
      status: 'init',
      error: payload?.error,
    };
  })
);

export function FeederListingReducer(
  state: FeederListingState | undefined,
  action: Action
) {
  return reducer(state, action);
}
