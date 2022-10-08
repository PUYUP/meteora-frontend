import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_stat');

export const selectStat = createSelector(state, (state: AppState) => {
  return state;
});
