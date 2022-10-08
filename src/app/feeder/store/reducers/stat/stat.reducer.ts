import { Action, createReducer, on } from '@ngrx/store';
import {
  loadStat,
  loadStatFailure,
  loadStatSuccess,
} from '../../actions/stat/stat.actions';

export const FeederStatFeatureKey = 'feeder_stat';

export interface FeederStatState {
  data: any;
  error: any;
  status: string;
}

export const initialState: FeederStatState = {
  data: {},
  error: null,
  status: 'init',
};

export const reducer = createReducer(
  initialState,

  // LOAD
  on(loadStat, (state, payload) => {
    return {
      ...state,
      error: null,
      status: 'loading',
    };
  }),
  on(loadStatSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadStatFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  })
);

export function FeederStatReducer(
  state: FeederStatState | undefined,
  action: Action
) {
  return reducer(state, action);
}
