import { createAction, props } from '@ngrx/store';

// LOAD
export const loadStat = createAction('[Stat] Load Stat');

export const loadStatSuccess = createAction(
  '[Stat] Load Stat Success',
  props<{ data: any }>()
);

export const loadStatFailure = createAction(
  '[Stat] Load Stat Failure',
  props<{ error: any }>()
);
