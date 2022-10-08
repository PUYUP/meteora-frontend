import { createAction, props } from '@ngrx/store';

// LOADS
export const loadFragments = createAction(
  '[Fragment] Load Fragments',
  props<{ isLoadMore?: boolean; url?: string; product: string }>()
);

export const loadFragmentsSuccess = createAction(
  '[Fragment] Load Fragments Success',
  props<{ data: any }>()
);

export const loadFragmentsFailure = createAction(
  '[Fragment] Load Fragments Failure',
  props<{ error: any }>()
);

// LOAD
export const loadFragment = createAction(
  '[Fragment] Load Fragment',
  props<{ uuid: string }>()
);

export const loadFragmentSuccess = createAction(
  '[Fragment] Load Fragment Success',
  props<{ data: any }>()
);

export const loadFragmentFailure = createAction(
  '[Fragment] Load Fragment Failure',
  props<{ error: any }>()
);

// CREATE
export const resetFragment = createAction('[Fragment] Reset Fragment');

export const createFragment = createAction(
  '[Fragment] Create Fragment',
  props<{ data: any }>()
);

export const createFragmentSuccess = createAction(
  '[Fragment] Create Fragment Success',
  props<{ data: any }>()
);

export const createFragmentFailure = createAction(
  '[Fragment] Create Fragment Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateFragment = createAction(
  '[Fragment] Update Fragment',
  props<{ data: any; uuid: string }>()
);

export const updateFragmentSuccess = createAction(
  '[Fragment] Update Fragment Success',
  props<{ data: any }>()
);

export const updateFragmentFailure = createAction(
  '[Fragment] Update Fragment Failure',
  props<{ error: any }>()
);

// DELETE
export const deleteFragment = createAction(
  '[Fragment] Delete Fragment',
  props<{ uuid: string }>()
);

export const deleteFragmentSuccess = createAction(
  '[Fragment] Delete Fragment Success',
  props<{ data: any }>()
);

export const deleteFragmentFailure = createAction(
  '[Fragment] Delete Fragment Failure',
  props<{ error: any }>()
);
