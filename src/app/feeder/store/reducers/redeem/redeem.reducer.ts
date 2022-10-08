import { Action, createReducer, on } from '@ngrx/store';
import {
  loadRedeem,
  loadRedeemFailure,
  loadRedeems,
  loadRedeemsFailure,
  loadRedeemsSuccess,
  loadRedeemSuccess,
  resetRedeems,
  updateRedeemSuccess,
} from '../../actions/redeem/redeem.actions';

export const FeederRedeemFeatureKey = 'feeder_redeem';

export interface FeederRedeemState {
  data: any;
  error: any;
  status: string;
  action?: string;
}

export const initialState: FeederRedeemState = {
  data: {},
  error: null,
  status: 'init',
};

export const reducer = createReducer(
  initialState,

  // LOADS
  on(loadRedeems, (state, payload) => {
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
  on(loadRedeemsSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadRedeemsFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  on(resetRedeems, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: null,
    };
  }),

  // LOAD
  on(loadRedeem, (state, payload) => {
    return {
      ...state,
      error: null,
      status: 'loading',
      action: 'load',
    };
  }),
  on(loadRedeemSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadRedeemFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // UPDATE
  on(updateRedeemSuccess, (state, payload) => {
    let results = state.data?.results;
    let newResults = results.map((d: any) => {
      if (d.uuid == payload?.data?.redeem_uuid) {
        d = { ...d, is_taken: true };
      }

      return d;
    });

    return {
      ...state,
      data: {
        ...state.data,
        results: newResults,
      },
    };
  })
);

export function FeederRedeemReducer(
  state: FeederRedeemState | undefined,
  action: Action
) {
  return reducer(state, action);
}
