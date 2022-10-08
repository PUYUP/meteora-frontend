import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { SpreadService } from 'src/app/feeder/services/spread/spread.service';
import {
  createSpread,
  createSpreadFailure,
  createSpreadSuccess,
  deleteSpread,
  deleteSpreadFailure,
  deleteSpreadSuccess,
  loadSpread,
  loadSpreadFailure,
  loadSpreads,
  loadSpreadsFailure,
  loadSpreadsSuccess,
  loadSpreadSuccess,
  resetSpread,
  updateSpread,
  updateSpreadFailure,
  updateSpreadSuccess,
} from '../../actions/spread/spread.actions';

@Injectable()
export class SpreadEffects {
  constructor(
    private actions$: Actions,
    private spreadService: SpreadService,
    private router: Router
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSpreads),
      mergeMap((payload) => {
        return this.spreadService.loadSpreads(payload).pipe(
          map((response) => {
            return loadSpreadsSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadSpreadsFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadSpreadsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSpread),
      mergeMap((payload) => {
        return this.spreadService.loadSpread(payload?.uuid).pipe(
          map((response) => {
            return loadSpreadSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadSpreadFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadSpreadSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSpread),
      mergeMap((payload) => {
        return this.spreadService.createSpread(payload?.data).pipe(
          map((response) => {
            return createSpreadSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createSpreadFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSpreadSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/spread', response?.data?.uuid])
      ),
      map((response: any) => {
        return resetSpread();
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSpread),
      mergeMap((payload) => {
        return this.spreadService
          .updateSpread(payload?.data, payload?.uuid)
          .pipe(
            map((response) => {
              return updateSpreadSuccess({
                data: response,
              });
            }),
            catchError((error) => of(updateSpreadFailure({ error: error })))
          );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSpreadSuccess),
      map((response: any) => {
        return resetSpread();
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSpread),
      mergeMap((payload) => {
        return this.spreadService.deleteSpread(payload?.uuid).pipe(
          map((response) => {
            return deleteSpreadSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deleteSpreadFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSpreadSuccess),
      tap((response) =>
        this.router.navigate(
          ['/feeder/fragment', response?.data?.content_object_uuid],
          {
            replaceUrl: true,
          }
        )
      ),
      map((response: any) => {
        return resetSpread();
      })
    )
  );
}
