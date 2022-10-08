import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_redeem');

export const selectRedeems = createSelector(state, (state: AppState) => {
  return state;
});

export const selectRedeem = (props: any) =>
  createSelector(state, (state: AppState) => {
    return state;
  });
