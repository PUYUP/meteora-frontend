import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { TargetService } from 'src/app/feeder/services/target/target.service';
import {
  createTarget,
  createTargetFailure,
  createTargetSuccess,
  deleteTarget,
  deleteTargetFailure,
  deleteTargetSuccess,
  loadTarget,
  loadTargetFailure,
  loadTargets,
  loadTargetsFailure,
  loadTargetsSuccess,
  loadTargetSuccess,
  resetTarget,
  updateTarget,
  updateTargetFailure,
  updateTargetSuccess,
} from '../../actions/target/target.actions';
import { loadBroadcast } from '../../actions/broadcast/broadcast.actions';

@Injectable()
export class TargetEffects {
  constructor(
    private actions$: Actions,
    private targetService: TargetService,
    private router: Router
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTargets),
      mergeMap((payload) => {
        return this.targetService.loadTargets(payload).pipe(
          map((response) => {
            return loadTargetsSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadTargetsFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadTargetsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTarget),
      mergeMap((payload) => {
        return this.targetService.loadTarget(payload?.uuid).pipe(
          map((response) => {
            return loadTargetSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadTargetFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadTargetSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTarget),
      mergeMap((payload) => {
        return this.targetService.createTarget(payload?.data).pipe(
          map((response) => {
            console.log(payload);
            return createTargetSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createTargetFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTargetSuccess),
      map((response: any) => {
        return loadBroadcast({ uuid: response?.data?.[0].broadcast });
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTarget),
      mergeMap((payload) => {
        return this.targetService
          .updateTarget(payload?.data, payload?.uuid)
          .pipe(
            map((response) => {
              return updateTargetSuccess({
                data: response,
              });
            }),
            catchError((error) => of(updateTargetFailure({ error: error })))
          );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTargetSuccess),
      map((response: any) => {
        return resetTarget();
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTarget),
      mergeMap((payload) => {
        return this.targetService.deleteTarget(payload?.uuid).pipe(
          map((response) => {
            return deleteTargetSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deleteTargetFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTargetSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/broadcast', response?.data?.broadcast], {
          replaceUrl: true,
        })
      ),
      map((response: any) => {
        return resetTarget();
      })
    )
  );
}
