import { createAction, props } from '@ngrx/store';

// LOADS
export const loadTargets = createAction(
  '[Target] Load Targets',
  props<{
    isLoadMore?: boolean;
    url?: string;
    method?: string;
    rating?: any;
    broadcast: string;
  }>()
);

export const loadTargetsSuccess = createAction(
  '[Target] Load Targets Success',
  props<{ data: any }>()
);

export const loadTargetsFailure = createAction(
  '[Target] Load Targets Failure',
  props<{ error: any }>()
);

// LOAD
export const loadTarget = createAction(
  '[Target] Load Target',
  props<{ uuid: string }>()
);

export const loadTargetSuccess = createAction(
  '[Target] Load Target Success',
  props<{ data: any }>()
);

export const loadTargetFailure = createAction(
  '[Target] Load Target Failure',
  props<{ error: any }>()
);

// CREATE
export const resetTarget = createAction('[Target] Reset Target');

export const createTarget = createAction(
  '[Target] Create Target',
  props<{ data: any }>()
);

export const createTargetSuccess = createAction(
  '[Target] Create Target Success',
  props<{ data: any }>()
);

export const createTargetFailure = createAction(
  '[Target] Create Target Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateTarget = createAction(
  '[Target] Update Target',
  props<{ data: any; uuid: string }>()
);

export const updateTargetSuccess = createAction(
  '[Target] Update Target Success',
  props<{ data: any }>()
);

export const updateTargetFailure = createAction(
  '[Target] Update Target Failure',
  props<{ error: any }>()
);

// DELETE
export const deleteTarget = createAction(
  '[Target] Delete Target',
  props<{ uuid: string }>()
);

export const deleteTargetSuccess = createAction(
  '[Target] Delete Target Success',
  props<{ data: any }>()
);

export const deleteTargetFailure = createAction(
  '[Target] Delete Target Failure',
  props<{ error: any }>()
);
