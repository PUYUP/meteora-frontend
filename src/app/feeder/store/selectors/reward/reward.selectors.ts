import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const state = createFeatureSelector<AppState>('feeder_reward');

export const selectRewards = createSelector(state, (state: AppState) => {
  return state;
});

export const selectReward = (props: any) =>
  createSelector(state, (state: AppState) => {
    return state;
  });
