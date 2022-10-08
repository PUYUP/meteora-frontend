import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_interaction');

export const selectInteractions = createSelector(state, (state: AppState) => {
  return state;
});

export const selectInteraction = (props: any) =>
  createSelector(state, (state: AppState) => {
    return state;
  });
