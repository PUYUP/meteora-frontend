import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_spread');

export const selectSpreads = createSelector(state, (state: AppState) => {
  return state;
});

export const selectSpread = (props: any) =>
  createSelector(state, (state: AppState) => {
    return state;
  });
