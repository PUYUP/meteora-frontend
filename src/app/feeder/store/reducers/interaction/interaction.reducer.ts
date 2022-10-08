import { Action, createReducer, on } from '@ngrx/store';
import {
  createInteraction,
  createInteractionFailure,
  createInteractionSuccess,
  loadInteraction,
  loadInteractionFailure,
  loadInteractions,
  loadInteractionsFailure,
  loadInteractionsSuccess,
  loadInteractionSuccess,
  resetInteraction,
  updateInteraction,
  updateInteractionFailure,
  updateInteractionSuccess,
} from '../../actions/interaction/interaction.actions';

export const FeederInteractionFeatureKey = 'feeder_interaction';

export interface FeederInteractionState {
  data: any;
  error: any;
  status: string;
  action?: string;
}

export const initialState: FeederInteractionState = {
  data: {},
  error: null,
  status: 'init',
};

export const reducer = createReducer(
  initialState,

  // LOADS
  on(loadInteractions, (state, payload) => {
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
  on(loadInteractionsSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadInteractionsFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // LOAD
  on(loadInteraction, (state, payload) => {
    return {
      ...state,
      error: null,
      status: 'loading',
      action: 'load',
    };
  }),
  on(loadInteractionSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadInteractionFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // CREATE
  on(createInteraction, (state) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'loading',
      error: null,
      action: 'create',
    };
  }),
  on(createInteractionSuccess, (state, payload) => {
    let results = state?.data?.results || [];
    let index = results.findIndex(
      (d: any) => d.description == payload?.data?.description
    );
    let newResults: any = [];

    if (index == -1) {
      newResults = [payload?.data, ...results];
    } else {
      newResults = results.map((d: any) => {
        if (d.description == payload?.data.description) {
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
  on(createInteractionFailure, (state, payload) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'init',
      error: payload?.error,
    };
  }),
  on(resetInteraction, (state) => {
    return {
      ...state,
      status: 'init',
      action: '',
    };
  }),

  // UPDATE
  on(updateInteraction, (state, payload) => {
    return {
      ...state,
      status: 'loading',
      action: 'update',
    };
  }),
  on(updateInteractionSuccess, (state, payload) => {
    return {
      ...state,
      status: 'loaded',
      data: { ...payload.data },
      error: null,
    };
  }),
  on(updateInteractionFailure, (state, payload) => {
    return {
      ...state,
      status: 'init',
      error: payload?.error,
    };
  })
);

export function FeederInteractionReducer(
  state: FeederInteractionState | undefined,
  action: Action
) {
  return reducer(state, action);
}
