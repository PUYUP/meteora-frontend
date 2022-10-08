import { createAction, props } from '@ngrx/store';

// LOADS
export const loadRewards = createAction(
  '[Reward] Load Rewards',
  props<{
    isLoadMore?: boolean;
    url?: string;
    fragment?: string;
    broadcast?: string;
  }>()
);

export const loadRewardsSuccess = createAction(
  '[Reward] Load Rewards Success',
  props<{ data: any }>()
);

export const loadRewardsFailure = createAction(
  '[Reward] Load Rewards Failure',
  props<{ error: any }>()
);

// LOAD
export const loadReward = createAction(
  '[Reward] Load Reward',
  props<{ uuid: string }>()
);

export const loadRewardSuccess = createAction(
  '[Reward] Load Reward Success',
  props<{ data: any }>()
);

export const loadRewardFailure = createAction(
  '[Reward] Load Reward Failure',
  props<{ error: any }>()
);

// CREATE
export const resetReward = createAction('[Reward] Reset Reward');

export const createReward = createAction(
  '[Reward] Create Reward',
  props<{ data: any }>()
);

export const createRewardSuccess = createAction(
  '[Reward] Create Reward Success',
  props<{ data: any }>()
);

export const createRewardFailure = createAction(
  '[Reward] Create Reward Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateReward = createAction(
  '[Reward] Update Reward',
  props<{ data: any; uuid: string }>()
);

export const updateRewardSuccess = createAction(
  '[Reward] Update Reward Success',
  props<{ data: any }>()
);

export const updateRewardFailure = createAction(
  '[Reward] Update Reward Failure',
  props<{ error: any }>()
);

// DELETE
export const deleteReward = createAction(
  '[Reward] Delete Reward',
  props<{ uuid: string }>()
);

export const deleteRewardSuccess = createAction(
  '[Reward] Delete Reward Success',
  props<{ data: any }>()
);

export const deleteRewardFailure = createAction(
  '[Reward] Delete Reward Failure',
  props<{ error: any }>()
);
