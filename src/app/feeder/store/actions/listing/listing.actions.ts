import { createAction, props } from '@ngrx/store';

// LOADS
export const loadListings = createAction(
  '[Listing] Load Listings',
  props<{ isLoadMore?: boolean; url?: string }>()
);

export const loadListingsSuccess = createAction(
  '[Listing] Load Listings Success',
  props<{ data: any }>()
);

export const loadListingsFailure = createAction(
  '[Listing] Load Listings Failure',
  props<{ error: any }>()
);

// LOAD
export const loadListing = createAction(
  '[Listing] Load Listing',
  props<{ uuid: string }>()
);

export const loadListingSuccess = createAction(
  '[Listing] Load Listing Success',
  props<{ data: any }>()
);

export const loadListingFailure = createAction(
  '[Listing] Load Listing Failure',
  props<{ error: any }>()
);

// CREATE
export const resetListing = createAction('[Listing] Reset Listing');

export const createListing = createAction(
  '[Listing] Create Listing',
  props<{ data: any }>()
);

export const createListingSuccess = createAction(
  '[Listing] Create Listing Success',
  props<{ data: any }>()
);

export const createListingFailure = createAction(
  '[Listing] Create Listing Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateListing = createAction(
  '[Listing] Update Listing',
  props<{ data: any; uuid: string }>()
);

export const updateListingSuccess = createAction(
  '[Listing] Update Listing Success',
  props<{ data: any }>()
);

export const updateListingFailure = createAction(
  '[Listing] Update Listing Failure',
  props<{ error: any }>()
);

// DELETE
export const deleteListing = createAction(
  '[Listing] Delete Listing',
  props<{ uuid: string }>()
);

export const deleteListingSuccess = createAction(
  '[Listing] Delete Listing Success',
  props<{ data: any }>()
);

export const deleteListingFailure = createAction(
  '[Listing] Delete Listing Failure',
  props<{ error: any }>()
);
