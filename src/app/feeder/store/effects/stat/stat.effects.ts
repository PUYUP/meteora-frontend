import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { StatService } from 'src/app/feeder/services/stat/stat.service';
import {
  loadStat,
  loadStatFailure,
  loadStatSuccess,
} from '../../actions/stat/stat.actions';

@Injectable()
export class StatEffects {
  constructor(
    private actions$: Actions,
    private statService: StatService,
    private router: Router
  ) {}

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStat),
      mergeMap((payload) => {
        return this.statService.loadStat().pipe(
          map((response) => {
            return loadStatSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadStatFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadStatSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );
}
