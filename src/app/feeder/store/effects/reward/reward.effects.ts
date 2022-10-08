import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { RewardService } from 'src/app/feeder/services/reward/reward.service';
import {
  createReward,
  createRewardFailure,
  createRewardSuccess,
  deleteReward,
  deleteRewardFailure,
  deleteRewardSuccess,
  loadReward,
  loadRewardFailure,
  loadRewards,
  loadRewardsFailure,
  loadRewardsSuccess,
  loadRewardSuccess,
  resetReward,
  updateReward,
  updateRewardFailure,
  updateRewardSuccess,
} from '../../actions/reward/reward.actions';

@Injectable()
export class RewardEffects {
  constructor(
    private actions$: Actions,
    private rewardService: RewardService,
    private router: Router
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRewards),
      mergeMap((payload) => {
        return this.rewardService.loadRewards(payload).pipe(
          map((response) => {
            return loadRewardsSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadRewardsFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadRewardsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadReward),
      mergeMap((payload) => {
        return this.rewardService.loadReward(payload?.uuid).pipe(
          map((response) => {
            return loadRewardSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadRewardFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadRewardSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createReward),
      mergeMap((payload) => {
        return this.rewardService.createReward(payload?.data).pipe(
          map((response) => {
            return createRewardSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createRewardFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createRewardSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/reward', response?.data?.uuid])
      ),
      map((response: any) => {
        return resetReward();
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateReward),
      mergeMap((payload) => {
        return this.rewardService
          .updateReward(payload?.data, payload?.uuid)
          .pipe(
            map((response) => {
              return updateRewardSuccess({
                data: response,
              });
            }),
            catchError((error) => of(updateRewardFailure({ error: error })))
          );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateRewardSuccess),
      map((response: any) => {
        return resetReward();
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteReward),
      mergeMap((payload) => {
        return this.rewardService.deleteReward(payload?.uuid).pipe(
          map((response) => {
            return deleteRewardSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deleteRewardFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteRewardSuccess),
      tap((response) =>
        this.router.navigate(
          ['/feeder/fragment', response?.data?.content_object_uuid],
          {
            replaceUrl: true,
          }
        )
      ),
      map((response: any) => {
        return resetReward();
      })
    )
  );
}
