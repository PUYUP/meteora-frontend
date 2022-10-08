import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { BroadcastService } from 'src/app/feeder/services/broadcast/broadcast.service';
import {
  createBroadcast,
  createBroadcastFailure,
  createBroadcastSuccess,
  deleteBroadcast,
  deleteBroadcastFailure,
  deleteBroadcastSuccess,
  loadBroadcast,
  loadBroadcastFailure,
  loadBroadcasts,
  loadBroadcastsFailure,
  loadBroadcastsSuccess,
  loadBroadcastSuccess,
  resetBroadcast,
  updateBroadcast,
  updateBroadcastFailure,
  updateBroadcastSuccess,
} from '../../actions/broadcast/broadcast.actions';

@Injectable()
export class BroadcastEffects {
  constructor(
    private actions$: Actions,
    private broadcastService: BroadcastService,
    private router: Router
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBroadcasts),
      mergeMap((payload) => {
        return this.broadcastService.loadBroadcasts(payload).pipe(
          map((response) => {
            return loadBroadcastsSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadBroadcastsFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadBroadcastsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBroadcast),
      mergeMap((payload) => {
        return this.broadcastService.loadBroadcast(payload?.uuid).pipe(
          map((response) => {
            return loadBroadcastSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadBroadcastFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadBroadcastSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createBroadcast),
      mergeMap((payload) => {
        return this.broadcastService.createBroadcast(payload?.data).pipe(
          map((response) => {
            return createBroadcastSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createBroadcastFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createBroadcastSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/broadcast', response?.data?.uuid])
      ),
      map((response: any) => {
        return resetBroadcast();
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBroadcast),
      mergeMap((payload) => {
        return this.broadcastService
          .updateBroadcast(payload?.data, payload?.uuid)
          .pipe(
            map((response) => {
              return updateBroadcastSuccess({
                data: response,
              });
            }),
            catchError((error) => of(updateBroadcastFailure({ error: error })))
          );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBroadcastSuccess),
      map((response: any) => {
        return resetBroadcast();
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteBroadcast),
      mergeMap((payload) => {
        return this.broadcastService.deleteBroadcast(payload?.uuid).pipe(
          map((response) => {
            return deleteBroadcastSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deleteBroadcastFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteBroadcastSuccess),
      tap(() =>
        this.router.navigate(['/feeder/broadcast'], { replaceUrl: true })
      ),
      map((response: any) => {
        return resetBroadcast();
      })
    )
  );
}
