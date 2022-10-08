import { createAction, props } from '@ngrx/store';

// LOADS
export const loadTakens = createAction(
  '[Taken] Load Takens',
  props<{ isLoadMore?: boolean; url?: string; listing: string }>()
);

export const loadTakensSuccess = createAction(
  '[Taken] Load Takens Success',
  props<{ data: any }>()
);

export const loadTakensFailure = createAction(
  '[Taken] Load Takens Failure',
  props<{ error: any }>()
);

// LOAD
export const loadTaken = createAction(
  '[Taken] Load Taken',
  props<{ uuid: string }>()
);

export const loadTakenSuccess = createAction(
  '[Taken] Load Taken Success',
  props<{ data: any }>()
);

export const loadTakenFailure = createAction(
  '[Taken] Load Taken Failure',
  props<{ error: any }>()
);

// CREATE
export const resetTaken = createAction('[Taken] Reset Taken');

export const createTaken = createAction(
  '[Taken] Create Taken',
  props<{ data: any }>()
);

export const createTakenSuccess = createAction(
  '[Taken] Create Taken Success',
  props<{ data: any }>()
);

export const createTakenFailure = createAction(
  '[Taken] Create Taken Failure',
  props<{ error: any }>()
);

// DELETE
export const deleteTaken = createAction(
  '[Taken] Delete Taken',
  props<{ uuid: string }>()
);

export const deleteTakenSuccess = createAction(
  '[Taken] Delete Taken Success',
  props<{ data: any }>()
);

export const deleteTakenFailure = createAction(
  '[Taken] Delete Taken Failure',
  props<{ error: any }>()
);
