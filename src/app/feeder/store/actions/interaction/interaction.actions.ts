import { createAction, props } from '@ngrx/store';

// LOADS
export const loadInteractions = createAction(
  '[Interaction] Load Interactions',
  props<{ suggest: string; isLoadMore?: boolean; url?: string }>()
);

export const loadInteractionsSuccess = createAction(
  '[Interaction] Load Interactions Success',
  props<{ data: any }>()
);

export const loadInteractionsFailure = createAction(
  '[Interaction] Load Interactions Failure',
  props<{ error: any }>()
);

// LOAD
export const loadInteraction = createAction(
  '[Interaction] Load Interaction',
  props<{ uuid: string }>()
);

export const loadInteractionSuccess = createAction(
  '[Interaction] Load Interaction Success',
  props<{ data: any }>()
);

export const loadInteractionFailure = createAction(
  '[Interaction] Load Interaction Failure',
  props<{ error: any }>()
);

// CREATE
export const resetInteraction = createAction('[Interaction] Reset Interaction');

export const createInteraction = createAction(
  '[Interaction] Create Interaction',
  props<{ data: any }>()
);

export const createInteractionSuccess = createAction(
  '[Interaction] Create Interaction Success',
  props<{ data: any }>()
);

export const createInteractionFailure = createAction(
  '[Interaction] Create Interaction Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateInteraction = createAction(
  '[Interaction] Update Interaction',
  props<{ data: any; uuid: string }>()
);

export const updateInteractionSuccess = createAction(
  '[Interaction] Update Interaction Success',
  props<{ data: any }>()
);

export const updateInteractionFailure = createAction(
  '[Interaction] Update Interaction Failure',
  props<{ error: any }>()
);

// DELETE
export const deleteInteraction = createAction(
  '[Interaction] Delete Interaction',
  props<{ uuid: string }>()
);

export const deleteInteractionSuccess = createAction(
  '[Interaction] Delete Interaction Success',
  props<{ data: any }>()
);

export const deleteInteractionFailure = createAction(
  '[Interaction] Delete Interaction Failure',
  props<{ error: any }>()
);
