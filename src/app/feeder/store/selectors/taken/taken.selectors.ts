import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_taken');

export const selectTakens = createSelector(state, (state: AppState) => {
  return state;
});

export const selectTaken = (props: any) =>
  createSelector(state, (state: AppState) => {
    return state;
  });
