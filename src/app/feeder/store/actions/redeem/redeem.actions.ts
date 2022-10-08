import { createAction, props } from '@ngrx/store';

// LOADS
export const loadRedeems = createAction(
  '[Redeem] Load Redeems',
  props<{
    isLoadMore?: boolean;
    url?: string;
    identifier?: string;
  }>()
);

export const loadRedeemsSuccess = createAction(
  '[Redeem] Load Redeems Success',
  props<{ data: any }>()
);

export const loadRedeemsFailure = createAction(
  '[Redeem] Load Redeems Failure',
  props<{ error: any }>()
);

export const resetRedeems = createAction('[Redeem] Reset Redeems');

// LOAD
export const loadRedeem = createAction(
  '[Redeem] Load Redeem',
  props<{ uuid: string }>()
);

export const loadRedeemSuccess = createAction(
  '[Redeem] Load Redeem Success',
  props<{ data: any }>()
);

export const loadRedeemFailure = createAction(
  '[Redeem] Load Redeem Failure',
  props<{ error: any }>()
);

// UPDATE
export const updateRedeem = createAction(
  '[Redeem] Update Redeem',
  props<{ data: any; uuid: string }>()
);

export const updateRedeemSuccess = createAction(
  '[Redeem] Update Redeem Success',
  props<{ data: any }>()
);
