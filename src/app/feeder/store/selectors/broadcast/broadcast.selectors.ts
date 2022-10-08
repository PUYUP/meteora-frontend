import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_broadcast');

export const selectBroadcasts = createSelector(state, (state: AppState) => {
  return state;
});

export const selectBroadcast = (props: any) =>
  createSelector(state, (state: AppState) => {
    return state;
  });
