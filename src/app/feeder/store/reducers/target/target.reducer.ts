import { Action, createReducer, on } from '@ngrx/store';
import {
  createTarget,
  createTargetFailure,
  createTargetSuccess,
  loadTarget,
  loadTargetFailure,
  loadTargets,
  loadTargetsFailure,
  loadTargetsSuccess,
  loadTargetSuccess,
  resetTarget,
  updateTarget,
  updateTargetFailure,
  updateTargetSuccess,
} from '../../actions/target/target.actions';

export const FeederTargetFeatureKey = 'feeder_target';

export interface FeederTargetState {
  data: any;
  error: any;
  status: string;
  action?: string;
}

export const initialState: FeederTargetState = {
  data: {},
  error: null,
  status: 'init',
};

export const reducer = createReducer(
  initialState,

  // LOADS
  on(loadTargets, (state, payload) => {
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
  on(loadTargetsSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadTargetsFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // LOAD
  on(loadTarget, (state, payload) => {
    return {
      ...state,
      error: null,
      status: 'loading',
      action: 'load',
    };
  }),
  on(loadTargetSuccess, (state, payload) => {
    return {
      ...state,
      data: { ...payload?.data },
      status: 'loaded',
      error: null,
    };
  }),
  on(loadTargetFailure, (state, payload) => {
    return {
      ...state,
      data: {},
      status: 'init',
      error: payload?.error,
    };
  }),

  // CREATE
  on(createTarget, (state) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'loading',
      error: null,
      action: 'create',
    };
  }),
  on(createTargetSuccess, (state, payload) => {
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
  on(createTargetFailure, (state, payload) => {
    return {
      ...state,
      data: { ...state.data },
      status: 'init',
      error: payload?.error,
    };
  }),
  on(resetTarget, (state) => {
    return {
      ...state,
      status: 'init',
      action: '',
    };
  }),

  // UPDATE
  on(updateTarget, (state, payload) => {
    return {
      ...state,
      status: 'loading',
      action: 'update',
    };
  }),
  on(updateTargetSuccess, (state, payload) => {
    return {
      ...state,
      status: 'loaded',
      data: { ...payload.data },
      error: null,
    };
  }),
  on(updateTargetFailure, (state, payload) => {
    return {
      ...state,
      status: 'init',
      error: payload?.error,
    };
  })
);

export function FeederTargetReducer(
  state: FeederTargetState | undefined,
  action: Action
) {
  return reducer(state, action);
}
