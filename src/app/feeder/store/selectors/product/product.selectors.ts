import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_product');

export const selectProducts = createSelector(state, (state: AppState) => {
  return state;
});

export const selectProduct = (props: any) =>
  createSelector(state, (state: AppState) => {
    return state;
  });
