import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { TakenService } from 'src/app/feeder/services/taken/taken.service';
import { updateRedeemSuccess } from '../../actions/redeem/redeem.actions';
import {
  createTaken,
  createTakenFailure,
  createTakenSuccess,
  deleteTaken,
  deleteTakenFailure,
  deleteTakenSuccess,
  loadTaken,
  loadTakenFailure,
  loadTakens,
  loadTakensFailure,
  loadTakensSuccess,
  loadTakenSuccess,
  resetTaken,
} from '../../actions/taken/taken.actions';

@Injectable()
export class TakenEffects {
  constructor(
    private actions$: Actions,
    private takenService: TakenService,
    private router: Router
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTakens),
      mergeMap((payload) => {
        return this.takenService.loadTakens(payload).pipe(
          map((response) => {
            return loadTakensSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadTakensFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadTakensSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTaken),
      mergeMap((payload) => {
        return this.takenService.loadTaken(payload?.uuid).pipe(
          map((response) => {
            return loadTakenSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadTakenFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadTakenSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTaken),
      mergeMap((payload) => {
        return this.takenService.createTaken(payload?.data).pipe(
          map((response) => {
            return createTakenSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createTakenFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTakenSuccess),
      tap((response) => resetTaken()),
      map((response: any) => {
        return updateRedeemSuccess({
          data: { ...response?.data, from_taken: true },
        });
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTaken),
      mergeMap((payload) => {
        return this.takenService.deleteTaken(payload?.uuid).pipe(
          map((response) => {
            return deleteTakenSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deleteTakenFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTakenSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/listing', response?.data?.listing], {
          replaceUrl: true,
        })
      ),
      map((response: any) => {
        return resetTaken();
      })
    )
  );
}
