import { createAction, props } from '@ngrx/store';

// LOADS
export const loadSuggests = createAction(
  '[Suggest] Load Suggests',
  props<{
    isLoadMore?: boolean;
    url?: string;
    spread?: string;
    fragment?: string;
    product?: string;
    canal?: string;
    rating?: number;
    reset?: boolean;
    keyword?: any;
  }>()
);

export const loadSuggestsSuccess = createAction(
  '[Suggest] Load Suggests Success',
  props<{ data: any }>()
);

export const loadSuggestsFailure = createAction(
  '[Suggest] Load Suggests Failure',
  props<{ error: any }>()
);

export const resetSuggests = createAction('[Suggest] Reset Suggests');

// LOAD
export const loadSuggest = createAction(
  '[Suggest] Load Suggest',
  props<{ uuid: string }>()
);

export const loadSuggestSuccess = createAction(
  '[Suggest] Load Suggest Success',
  props<{ data: any }>()
);

export const loadSuggestFailure = createAction(
  '[Suggest] Load Suggest Failure',
  props<{ error: any }>()
);

// CREATE
export const resetSuggest = createAction('[Suggest] Reset Suggest');

export const createSuggest = createAction(
  '[Suggest] Create Suggest',
  props<{ data: any }>()
);

export const createSuggestSuccess = createAction(
  '[Suggest] Create Suggest Success',
  props<{ data: any }>()
);

export const createSuggestFailure = createAction(
  '[Suggest] Create Suggest Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateSuggest = createAction(
  '[Suggest] Update Suggest',
  props<{ data: any; uuid: string }>()
);

export const updateSuggestSuccess = createAction(
  '[Suggest] Update Suggest Success',
  props<{ data: any }>()
);

export const updateSuggestFailure = createAction(
  '[Suggest] Update Suggest Failure',
  props<{ error: any }>()
);

// DELETE
export const deleteSuggest = createAction(
  '[Suggest] Delete Suggest',
  props<{ uuid: string }>()
);

export const deleteSuggestSuccess = createAction(
  '[Suggest] Delete Suggest Success',
  props<{ data: any }>()
);

export const deleteSuggestFailure = createAction(
  '[Suggest] Delete Suggest Failure',
  props<{ error: any }>()
);
