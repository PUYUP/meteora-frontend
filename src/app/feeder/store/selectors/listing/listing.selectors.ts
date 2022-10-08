import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_listing');

export const selectListings = createSelector(state, (state: AppState) => {
  return state;
});

export const selectListing = (props: any) =>
  createSelector(state, (state: AppState) => {
    return state;
  });
