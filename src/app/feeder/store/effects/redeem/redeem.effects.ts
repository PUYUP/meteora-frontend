import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { RedeemService } from 'src/app/feeder/services/redeem/redeem.service';
import {
  loadRedeem,
  loadRedeemFailure,
  loadRedeems,
  loadRedeemsFailure,
  loadRedeemsSuccess,
  loadRedeemSuccess,
} from '../../actions/redeem/redeem.actions';

@Injectable()
export class RedeemEffects {
  constructor(
    private actions$: Actions,
    private redeemService: RedeemService,
    private router: Router
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRedeems),
      mergeMap((payload) => {
        return this.redeemService.loadRedeems(payload).pipe(
          map((response) => {
            return loadRedeemsSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadRedeemsFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadRedeemsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRedeem),
      mergeMap((payload) => {
        return this.redeemService.loadRedeem(payload?.uuid).pipe(
          map((response) => {
            return loadRedeemSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadRedeemFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadRedeemSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );
}
