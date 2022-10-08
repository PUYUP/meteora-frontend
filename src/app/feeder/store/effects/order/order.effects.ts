import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { OrderService } from 'src/app/feeder/services/order/order.service';
import {
  createOrder,
  createOrderFailure,
  createOrderSuccess,
  deleteOrder,
  deleteOrderFailure,
  deleteOrderSuccess,
  loadOrder,
  loadOrderFailure,
  loadOrders,
  loadOrdersFailure,
  loadOrdersSuccess,
  loadOrderSuccess,
  resetOrder,
  updateOrder,
  updateOrderFailure,
  updateOrderSuccess,
} from '../../actions/order/order.actions';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private router: Router
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrders),
      mergeMap((payload) => {
        return this.orderService.loadOrders(payload).pipe(
          map((response) => {
            return loadOrdersSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadOrdersFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadOrdersSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrder),
      mergeMap((payload) => {
        return this.orderService.loadOrder(payload?.uuid).pipe(
          map((response) => {
            return loadOrderSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadOrderFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadOrderSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createOrder),
      mergeMap((payload) => {
        return this.orderService.createOrder(payload?.data).pipe(
          map((response) => {
            return createOrderSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createOrderFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createOrderSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/order', response?.data?.uuid])
      ),
      map((response: any) => {
        return resetOrder();
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateOrder),
      mergeMap((payload) => {
        return this.orderService.updateOrder(payload?.data, payload?.uuid).pipe(
          map((response) => {
            return updateOrderSuccess({
              data: response,
            });
          }),
          catchError((error) => of(updateOrderFailure({ error: error })))
        );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateOrderSuccess),
      map((response: any) => {
        return resetOrder();
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteOrder),
      mergeMap((payload) => {
        return this.orderService.deleteOrder(payload?.uuid).pipe(
          map((response) => {
            return deleteOrderSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deleteOrderFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteOrderSuccess),
      tap(() => this.router.navigate(['/'], { replaceUrl: true })),
      map((response: any) => {
        return resetOrder();
      })
    )
  );
}
