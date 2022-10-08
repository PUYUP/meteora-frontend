import { createAction, props } from '@ngrx/store';

// LOADS
export const loadOrders = createAction(
  '[Order] Load Orders',
  props<{ isLoadMore?: boolean; url?: string }>()
);

export const loadOrdersSuccess = createAction(
  '[Order] Load Orders Success',
  props<{ data: any }>()
);

export const loadOrdersFailure = createAction(
  '[Order] Load Orders Failure',
  props<{ error: any }>()
);

// LOAD
export const loadOrder = createAction(
  '[Order] Load Order',
  props<{ uuid: string }>()
);

export const loadOrderSuccess = createAction(
  '[Order] Load Order Success',
  props<{ data: any }>()
);

export const loadOrderFailure = createAction(
  '[Order] Load Order Failure',
  props<{ error: any }>()
);

// CREATE
export const resetOrder = createAction('[Order] Reset Order');

export const createOrder = createAction(
  '[Order] Create Order',
  props<{ data: any }>()
);

export const createOrderSuccess = createAction(
  '[Order] Create Order Success',
  props<{ data: any }>()
);

export const createOrderFailure = createAction(
  '[Order] Create Order Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateOrder = createAction(
  '[Order] Update Order',
  props<{ data: any; uuid: string }>()
);

export const updateOrderSuccess = createAction(
  '[Order] Update Order Success',
  props<{ data: any }>()
);

export const updateOrderFailure = createAction(
  '[Order] Update Order Failure',
  props<{ error: any }>()
);

// DELETE
export const deleteOrder = createAction(
  '[Order] Delete Order',
  props<{ uuid: string }>()
);

export const deleteOrderSuccess = createAction(
  '[Order] Delete Order Success',
  props<{ data: any }>()
);

export const deleteOrderFailure = createAction(
  '[Order] Delete Order Failure',
  props<{ error: any }>()
);
