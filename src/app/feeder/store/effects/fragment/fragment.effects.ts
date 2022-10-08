import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { FragmentService } from 'src/app/feeder/services/fragment/fragment.service';
import {
  createFragment,
  createFragmentFailure,
  createFragmentSuccess,
  deleteFragment,
  deleteFragmentFailure,
  deleteFragmentSuccess,
  loadFragment,
  loadFragmentFailure,
  loadFragments,
  loadFragmentsFailure,
  loadFragmentsSuccess,
  loadFragmentSuccess,
  resetFragment,
  updateFragment,
  updateFragmentFailure,
  updateFragmentSuccess,
} from '../../actions/fragment/fragment.actions';

@Injectable()
export class FragmentEffects {
  constructor(
    private actions$: Actions,
    private fragmentService: FragmentService,
    private router: Router
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFragments),
      mergeMap((payload) => {
        return this.fragmentService.loadFragments(payload).pipe(
          map((response) => {
            return loadFragmentsSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadFragmentsFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadFragmentsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFragment),
      mergeMap((payload) => {
        return this.fragmentService.loadFragment(payload?.uuid).pipe(
          map((response) => {
            return loadFragmentSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadFragmentFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadFragmentSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createFragment),
      mergeMap((payload) => {
        return this.fragmentService.createFragment(payload?.data).pipe(
          map((response) => {
            return createFragmentSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createFragmentFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createFragmentSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/fragment', response?.data?.uuid])
      ),
      map((response: any) => {
        return resetFragment();
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateFragment),
      mergeMap((payload) => {
        return this.fragmentService
          .updateFragment(payload?.data, payload?.uuid)
          .pipe(
            map((response) => {
              return updateFragmentSuccess({
                data: response,
              });
            }),
            catchError((error) => of(updateFragmentFailure({ error: error })))
          );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateFragmentSuccess),
      map((response: any) => {
        return resetFragment();
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteFragment),
      mergeMap((payload) => {
        return this.fragmentService.deleteFragment(payload?.uuid).pipe(
          map((response) => {
            return deleteFragmentSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deleteFragmentFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteFragmentSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/product', response?.data?.product], {
          replaceUrl: true,
        })
      ),
      map((response: any) => {
        return resetFragment();
      })
    )
  );
}
