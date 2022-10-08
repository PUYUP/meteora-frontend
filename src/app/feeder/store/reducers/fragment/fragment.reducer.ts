import { Action, createReducer, on } from '@ngrx/store';
import {
  createFragment,
  createFragmentFailure,
  createFragmentSuccess,
  loadFragment,
  loadFragmentFailure,
  loadFragments,
  loadFragmentsFailure,
  loadFragmentsSuccess,
  loadFragmentSuccess,
  resetFragment,
  updateFragment,
  updateFragmentFailure,
  updateFragmentSuccess,
} from '../../actions/fragment/fragment.actions';

export const FeederFragmentFeatureKey = 'feeder_fragment';

export interface FeederFragmentState {
  data: any;
  error: any;
  status: string;
  action?: string;
}

export const initialState: FeederFragmentState = {
  data: {},
  error: null,
  status: 'init',
};

export const reducer = createReducer(
  initialState,

  // LOADS
  on(loadFragments, (state, payload) => {
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
  on(loadFragmentsSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadFragmentsFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // LOAD
  on(loadFragment, (state, payload) => {
    return {
      ...state,
      error: null,
      status: 'loading',
      action: 'load',
    };
  }),
  on(loadFragmentSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadFragmentFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // CREATE
  on(createFragment, (state) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'loading',
      error: null,
      action: 'create',
    };
  }),
  on(createFragmentSuccess, (state, payload) => {
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
  on(createFragmentFailure, (state, payload) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'init',
      error: payload?.error,
    };
  }),
  on(resetFragment, (state) => {
    return {
      ...state,
      data: {},
      status: 'init',
      action: '',
    };
  }),

  // UPDATE
  on(updateFragment, (state, payload) => {
    return {
      ...state,
      status: 'loading',
      action: 'update',
    };
  }),
  on(updateFragmentSuccess, (state, payload) => {
    return {
      ...state,
      status: 'loaded',
      data: { ...payload.data },
      error: null,
    };
  }),
  on(updateFragmentFailure, (state, payload) => {
    return {
      ...state,
      status: 'init',
      error: payload?.error,
    };
  })
);

export function FeederFragmentReducer(
  state: FeederFragmentState | undefined,
  action: Action
) {
  return reducer(state, action);
}
