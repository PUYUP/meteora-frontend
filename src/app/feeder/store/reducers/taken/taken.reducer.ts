import { Action, createReducer, on } from '@ngrx/store';
import {
  createTaken,
  createTakenFailure,
  createTakenSuccess,
  loadTaken,
  loadTakenFailure,
  loadTakens,
  loadTakensFailure,
  loadTakensSuccess,
  loadTakenSuccess,
  resetTaken,
} from '../../actions/taken/taken.actions';

export const FeederTakenFeatureKey = 'feeder_taken';

export interface FeederTakenState {
  data: any;
  error: any;
  status: string;
  action?: string;
}

export const initialState: FeederTakenState = {
  data: {},
  error: null,
  status: 'init',
};

export const reducer = createReducer(
  initialState,

  // LOADS
  on(loadTakens, (state, payload) => {
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
  on(loadTakensSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadTakensFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // LOAD
  on(loadTaken, (state, payload) => {
    return {
      ...state,
      error: null,
      status: 'loading',
      action: 'load',
    };
  }),
  on(loadTakenSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadTakenFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // CREATE
  on(createTaken, (state) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'loading',
      error: null,
      action: 'create',
    };
  }),
  on(createTakenSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(createTakenFailure, (state, payload) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'init',
      error: payload?.error,
    };
  }),
  on(resetTaken, (state) => {
    return {
      ...state,
      status: 'init',
      action: '',
    };
  })
);

export function FeederTakenReducer(
  state: FeederTakenState | undefined,
  action: Action
) {
  return reducer(state, action);
}
