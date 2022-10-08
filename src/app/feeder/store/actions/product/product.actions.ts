import { createAction, props } from '@ngrx/store';

// LOADS
export const loadProducts = createAction(
  '[Product] Load Products',
  props<{ isLoadMore?: boolean; url?: string; listing?: string }>()
);

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ data: any }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);

// LOAD
export const loadProduct = createAction(
  '[Product] Load Product',
  props<{ uuid: string }>()
);

export const loadProductSuccess = createAction(
  '[Product] Load Product Success',
  props<{ data: any }>()
);

export const loadProductFailure = createAction(
  '[Product] Load Product Failure',
  props<{ error: any }>()
);

// CREATE
export const resetProduct = createAction('[Product] Reset Product');

export const createProduct = createAction(
  '[Product] Create Product',
  props<{ data: any }>()
);

export const createProductSuccess = createAction(
  '[Product] Create Product Success',
  props<{ data: any }>()
);

export const createProductFailure = createAction(
  '[Product] Create Product Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ data: any; uuid: string }>()
);

export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ data: any }>()
);

export const updateProductFailure = createAction(
  '[Product] Update Product Failure',
  props<{ error: any }>()
);

// DELETE
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ uuid: string }>()
);

export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ data: any }>()
);

export const deleteProductFailure = createAction(
  '[Product] Delete Product Failure',
  props<{ error: any }>()
);
