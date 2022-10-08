import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { SuggestService } from 'src/app/feeder/services/suggest/suggest.service';
import {
  createSuggest,
  createSuggestFailure,
  createSuggestSuccess,
  deleteSuggest,
  deleteSuggestFailure,
  deleteSuggestSuccess,
  loadSuggest,
  loadSuggestFailure,
  loadSuggests,
  loadSuggestsFailure,
  loadSuggestsSuccess,
  loadSuggestSuccess,
  resetSuggest,
  updateSuggest,
  updateSuggestFailure,
  updateSuggestSuccess,
} from '../../actions/suggest/suggest.actions';

@Injectable()
export class SuggestEffects {
  constructor(
    private actions$: Actions,
    private suggestService: SuggestService,
    private router: Router
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSuggests),
      mergeMap((payload) => {
        if (!payload?.reset) {
          return this.suggestService.loadSuggests(payload).pipe(
            map((response) => {
              return loadSuggestsSuccess({
                data: response,
              });
            }),
            catchError((error) => of(loadSuggestsFailure({ error: error })))
          );
        } else {
          return of<any>();
        }
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadSuggestsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSuggest),
      mergeMap((payload) => {
        return this.suggestService.loadSuggest(payload?.uuid).pipe(
          map((response) => {
            return loadSuggestSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadSuggestFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadSuggestSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSuggest),
      mergeMap((payload) => {
        return this.suggestService.createSuggest(payload?.data).pipe(
          map((response) => {
            return createSuggestSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createSuggestFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSuggestSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/suggest', response?.data?.uuid])
      ),
      map((response: any) => {
        return resetSuggest();
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSuggest),
      mergeMap((payload) => {
        return this.suggestService
          .updateSuggest(payload?.data, payload?.uuid)
          .pipe(
            map((response) => {
              return updateSuggestSuccess({
                data: response,
              });
            }),
            catchError((error) => of(updateSuggestFailure({ error: error })))
          );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSuggestSuccess),
      map((response: any) => {
        return resetSuggest();
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSuggest),
      mergeMap((payload) => {
        return this.suggestService.deleteSuggest(payload?.uuid).pipe(
          map((response) => {
            return deleteSuggestSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deleteSuggestFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSuggestSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/product', response?.data?.product], {
          replaceUrl: true,
        })
      ),
      map((response: any) => {
        return resetSuggest();
      })
    )
  );
}
