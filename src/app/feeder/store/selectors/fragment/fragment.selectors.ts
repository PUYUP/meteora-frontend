import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_fragment');

export const selectFragments = createSelector(state, (state: AppState) => {
  return state;
});

export const selectFragment = (props: any) =>
  createSelector(state, (state: AppState) => {
    return state;
  });
