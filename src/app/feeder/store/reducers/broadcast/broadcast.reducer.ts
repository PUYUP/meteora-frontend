import { Action, createReducer, on } from '@ngrx/store';
import {
  createBroadcast,
  createBroadcastFailure,
  createBroadcastSuccess,
  loadBroadcast,
  loadBroadcastFailure,
  loadBroadcasts,
  loadBroadcastsFailure,
  loadBroadcastsSuccess,
  loadBroadcastSuccess,
  resetBroadcast,
  updateBroadcast,
  updateBroadcastFailure,
  updateBroadcastSuccess,
} from '../../actions/broadcast/broadcast.actions';

export const FeederBroadcastFeatureKey = 'feeder_broadcast';

export interface FeederBroadcastState {
  data: any;
  error: any;
  status: string;
  action?: string;
}

export const initialState: FeederBroadcastState = {
  data: {},
  error: null,
  status: 'init',
};

export const reducer = createReducer(
  initialState,

  // LOADS
  on(loadBroadcasts, (state, payload) => {
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
  on(loadBroadcastsSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadBroadcastsFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // LOAD
  on(loadBroadcast, (state, payload) => {
    return {
      ...state,
      error: null,
      status: 'loading',
      action: 'load',
    };
  }),
  on(loadBroadcastSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadBroadcastFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // CREATE
  on(createBroadcast, (state) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'loading',
      error: null,
      action: 'create',
    };
  }),
  on(createBroadcastSuccess, (state, payload) => {
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
  on(createBroadcastFailure, (state, payload) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'init',
      error: payload?.error,
    };
  }),
  on(resetBroadcast, (state) => {
    return {
      ...state,
      status: 'init',
      action: '',
    };
  }),

  // UPDATE
  on(updateBroadcast, (state, payload) => {
    return {
      ...state,
      status: 'loading',
      action: 'update',
    };
  }),
  on(updateBroadcastSuccess, (state, payload) => {
    return {
      ...state,
      status: 'loaded',
      data: { ...payload.data },
      error: null,
    };
  }),
  on(updateBroadcastFailure, (state, payload) => {
    return {
      ...state,
      status: 'init',
      error: payload?.error,
    };
  })
);

export function FeederBroadcastReducer(
  state: FeederBroadcastState | undefined,
  action: Action
) {
  return reducer(state, action);
}
