import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { ListingService } from 'src/app/feeder/services/listing/listing.service';
import {
  createListing,
  createListingFailure,
  createListingSuccess,
  deleteListing,
  deleteListingFailure,
  deleteListingSuccess,
  loadListing,
  loadListingFailure,
  loadListings,
  loadListingsFailure,
  loadListingsSuccess,
  loadListingSuccess,
  resetListing,
  updateListing,
  updateListingFailure,
  updateListingSuccess,
} from '../../actions/listing/listing.actions';

@Injectable()
export class ListingEffects {
  constructor(
    private actions$: Actions,
    private listingService: ListingService,
    private router: Router
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadListings),
      mergeMap((payload) => {
        return this.listingService.loadListings(payload).pipe(
          map((response) => {
            return loadListingsSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadListingsFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadListingsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadListing),
      mergeMap((payload) => {
        return this.listingService.loadListing(payload?.uuid).pipe(
          map((response) => {
            return loadListingSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadListingFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadListingSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createListing),
      mergeMap((payload) => {
        return this.listingService.createListing(payload?.data).pipe(
          map((response) => {
            return createListingSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createListingFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createListingSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/listing', response?.data?.uuid])
      ),
      map((response: any) => {
        return resetListing();
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateListing),
      mergeMap((payload) => {
        return this.listingService
          .updateListing(payload?.data, payload?.uuid)
          .pipe(
            map((response) => {
              return updateListingSuccess({
                data: response,
              });
            }),
            catchError((error) => of(updateListingFailure({ error: error })))
          );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateListingSuccess),
      map((response: any) => {
        return resetListing();
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteListing),
      mergeMap((payload) => {
        return this.listingService.deleteListing(payload?.uuid).pipe(
          map((response) => {
            return deleteListingSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deleteListingFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteListingSuccess),
      tap(() => this.router.navigate(['/'], { replaceUrl: true })),
      map((response: any) => {
        return resetListing();
      })
    )
  );
}
