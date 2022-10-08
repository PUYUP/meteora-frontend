import { Action, createReducer, on } from '@ngrx/store';
import {
  createReward,
  createRewardFailure,
  createRewardSuccess,
  loadReward,
  loadRewardFailure,
  loadRewards,
  loadRewardsFailure,
  loadRewardsSuccess,
  loadRewardSuccess,
  resetReward,
  updateReward,
  updateRewardFailure,
  updateRewardSuccess,
} from '../../actions/reward/reward.actions';

export const FeederRewardFeatureKey = 'feeder_reward';

export interface FeederRewardState {
  data: any;
  error: any;
  status: string;
  action?: string;
}

export const initialState: FeederRewardState = {
  data: {},
  error: null,
  status: 'init',
};

export const reducer = createReducer(
  initialState,

  // LOADS
  on(loadRewards, (state, payload) => {
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
  on(loadRewardsSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadRewardsFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // LOAD
  on(loadReward, (state, payload) => {
    return {
      ...state,
      error: null,
      status: 'loading',
      action: 'load',
    };
  }),
  on(loadRewardSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadRewardFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // CREATE
  on(createReward, (state) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'loading',
      error: null,
      action: 'create',
    };
  }),
  on(createRewardSuccess, (state, payload) => {
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
  on(createRewardFailure, (state, payload) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'init',
      error: payload?.error,
    };
  }),
  on(resetReward, (state) => {
    return {
      ...state,
      status: 'init',
      action: '',
    };
  }),

  // UPDATE
  on(updateReward, (state, payload) => {
    return {
      ...state,
      status: 'loading',
      action: 'update',
    };
  }),
  on(updateRewardSuccess, (state, payload) => {
    return {
      ...state,
      status: 'loaded',
      data: { ...payload.data },
      error: null,
    };
  }),
  on(updateRewardFailure, (state, payload) => {
    return {
      ...state,
      status: 'init',
      error: payload?.error,
    };
  })
);

export function FeederRewardReducer(
  state: FeederRewardState | undefined,
  action: Action
) {
  return reducer(state, action);
}
