import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_suggest');

export const selectSuggests = createSelector(state, (state: AppState) => {
  return state;
});

export const selectSuggest = (props: any) =>
  createSelector(state, (state: AppState) => {
    return state;
  });
