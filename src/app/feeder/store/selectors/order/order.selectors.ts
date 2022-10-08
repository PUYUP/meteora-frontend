import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_order');

export const selectOrders = createSelector(state, (state: AppState) => {
  return state;
});

export const selectOrder = (props: any) =>
  createSelector(state, (state: AppState) => {
    return state;
  });
