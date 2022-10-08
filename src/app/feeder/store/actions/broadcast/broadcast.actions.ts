import { createAction, props } from '@ngrx/store';

// LOADS
export const loadBroadcasts = createAction(
  '[Broadcast] Load Broadcasts',
  props<{ isLoadMore?: boolean; url?: string }>()
);

export const loadBroadcastsSuccess = createAction(
  '[Broadcast] Load Broadcasts Success',
  props<{ data: any }>()
);

export const loadBroadcastsFailure = createAction(
  '[Broadcast] Load Broadcasts Failure',
  props<{ error: any }>()
);

// LOAD
export const loadBroadcast = createAction(
  '[Broadcast] Load Broadcast',
  props<{ uuid: string }>()
);

export const loadBroadcastSuccess = createAction(
  '[Broadcast] Load Broadcast Success',
  props<{ data: any }>()
);

export const loadBroadcastFailure = createAction(
  '[Broadcast] Load Broadcast Failure',
  props<{ error: any }>()
);

// CREATE
export const resetBroadcast = createAction('[Broadcast] Reset Broadcast');

export const createBroadcast = createAction(
  '[Broadcast] Create Broadcast',
  props<{ data: any }>()
);

export const createBroadcastSuccess = createAction(
  '[Broadcast] Create Broadcast Success',
  props<{ data: any }>()
);

export const createBroadcastFailure = createAction(
  '[Broadcast] Create Broadcast Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateBroadcast = createAction(
  '[Broadcast] Update Broadcast',
  props<{ data: any; uuid: string }>()
);

export const updateBroadcastSuccess = createAction(
  '[Broadcast] Update Broadcast Success',
  props<{ data: any }>()
);

export const updateBroadcastFailure = createAction(
  '[Broadcast] Update Broadcast Failure',
  props<{ error: any }>()
);

// DELETE
export const deleteBroadcast = createAction(
  '[Broadcast] Delete Broadcast',
  props<{ uuid: string }>()
);

export const deleteBroadcastSuccess = createAction(
  '[Broadcast] Delete Broadcast Success',
  props<{ data: any }>()
);

export const deleteBroadcastFailure = createAction(
  '[Broadcast] Delete Broadcast Failure',
  props<{ error: any }>()
);
