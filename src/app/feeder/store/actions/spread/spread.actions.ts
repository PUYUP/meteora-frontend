import { createAction, props } from '@ngrx/store';

// LOADS
export const loadSpreads = createAction(
  '[Spread] Load Spreads',
  props<{
    isLoadMore?: boolean;
    url?: string;
    fragment?: string;
    broadcast?: string;
  }>()
);

export const loadSpreadsSuccess = createAction(
  '[Spread] Load Spreads Success',
  props<{ data: any }>()
);

export const loadSpreadsFailure = createAction(
  '[Spread] Load Spreads Failure',
  props<{ error: any }>()
);

// LOAD
export const loadSpread = createAction(
  '[Spread] Load Spread',
  props<{ uuid: string }>()
);

export const loadSpreadSuccess = createAction(
  '[Spread] Load Spread Success',
  props<{ data: any }>()
);

export const loadSpreadFailure = createAction(
  '[Spread] Load Spread Failure',
  props<{ error: any }>()
);

// CREATE
export const resetSpread = createAction('[Spread] Reset Spread');

export const createSpread = createAction(
  '[Spread] Create Spread',
  props<{ data: any }>()
);

export const createSpreadSuccess = createAction(
  '[Spread] Create Spread Success',
  props<{ data: any }>()
);

export const createSpreadFailure = createAction(
  '[Spread] Create Spread Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateSpread = createAction(
  '[Spread] Update Spread',
  props<{ data: any; uuid: string }>()
);

export const updateSpreadSuccess = createAction(
  '[Spread] Update Spread Success',
  props<{ data: any }>()
);

export const updateSpreadFailure = createAction(
  '[Spread] Update Spread Failure',
  props<{ error: any }>()
);

// DELETE
export const deleteSpread = createAction(
  '[Spread] Delete Spread',
  props<{ uuid: string }>()
);

export const deleteSpreadSuccess = createAction(
  '[Spread] Delete Spread Success',
  props<{ data: any }>()
);

export const deleteSpreadFailure = createAction(
  '[Spread] Delete Spread Failure',
  props<{ error: any }>()
);
