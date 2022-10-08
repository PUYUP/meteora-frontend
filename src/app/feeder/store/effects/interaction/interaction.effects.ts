import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { InteractionService } from 'src/app/feeder/services/interaction/interaction.service';
import {
  createInteraction,
  createInteractionFailure,
  createInteractionSuccess,
  deleteInteraction,
  deleteInteractionFailure,
  deleteInteractionSuccess,
  loadInteraction,
  loadInteractionFailure,
  loadInteractions,
  loadInteractionsFailure,
  loadInteractionsSuccess,
  loadInteractionSuccess,
  resetInteraction,
  updateInteraction,
  updateInteractionFailure,
  updateInteractionSuccess,
} from '../../actions/interaction/interaction.actions';

@Injectable()
export class InteractionEffects {
  constructor(
    private actions$: Actions,
    private interactionService: InteractionService
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInteractions),
      mergeMap((payload) => {
        return this.interactionService.loadInteractions(payload).pipe(
          map((response) => {
            return loadInteractionsSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadInteractionsFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadInteractionsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInteraction),
      mergeMap((payload) => {
        return this.interactionService.loadInteraction(payload?.uuid).pipe(
          map((response) => {
            return loadInteractionSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadInteractionFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadInteractionSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createInteraction),
      mergeMap((payload) => {
        return this.interactionService.createInteraction(payload?.data).pipe(
          map((response) => {
            return createInteractionSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createInteractionFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createInteractionSuccess),
      map((response: any) => {
        return resetInteraction();
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateInteraction),
      mergeMap((payload) => {
        return this.interactionService
          .updateInteraction(payload?.data, payload?.uuid)
          .pipe(
            map((response) => {
              return updateInteractionSuccess({
                data: response,
              });
            }),
            catchError((error) =>
              of(updateInteractionFailure({ error: error }))
            )
          );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateInteractionSuccess),
      map((response: any) => {
        return resetInteraction();
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteInteraction),
      mergeMap((payload) => {
        return this.interactionService.deleteInteraction(payload?.uuid).pipe(
          map((response) => {
            return deleteInteractionSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deleteInteractionFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteInteractionSuccess),
      map((response: any) => {
        return resetInteraction();
      })
    )
  );
}
