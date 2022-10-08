import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { ProductService } from 'src/app/feeder/services/product/product.service';
import {
  createProduct,
  createProductFailure,
  createProductSuccess,
  deleteProduct,
  deleteProductFailure,
  deleteProductSuccess,
  loadProduct,
  loadProductFailure,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  loadProductSuccess,
  resetProduct,
  updateProduct,
  updateProductFailure,
  updateProductSuccess,
} from '../../actions/product/product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router
  ) {}

  // LOADS
  loads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap((payload) => {
        return this.productService.loadProducts(payload).pipe(
          map((response) => {
            return loadProductsSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadProductsFailure({ error: error })))
        );
      })
    )
  );

  loadsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadProductsSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // LOAD
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProduct),
      mergeMap((payload) => {
        return this.productService.loadProduct(payload?.uuid).pipe(
          map((response) => {
            return loadProductSuccess({
              data: response,
            });
          }),
          catchError((error) => of(loadProductFailure({ error: error })))
        );
      })
    )
  );

  loadSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadProductSuccess),
        map((response: any) => {
          return response;
        })
      ),
    { dispatch: false }
  );

  // CREATE
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProduct),
      mergeMap((payload) => {
        return this.productService.createProduct(payload?.data).pipe(
          map((response) => {
            return createProductSuccess({
              data: response,
            });
          }),
          catchError((error) => of(createProductFailure({ error: error })))
        );
      })
    )
  );

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProductSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/product', response?.data?.uuid])
      ),
      map((response: any) => {
        return resetProduct();
      })
    )
  );

  // UPDATE
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProduct),
      mergeMap((payload) => {
        return this.productService
          .updateProduct(payload?.data, payload?.uuid)
          .pipe(
            map((response) => {
              return updateProductSuccess({
                data: response,
              });
            }),
            catchError((error) => of(updateProductFailure({ error: error })))
          );
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProductSuccess),
      map((response: any) => {
        return resetProduct();
      })
    )
  );

  // DELETE
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProduct),
      mergeMap((payload) => {
        return this.productService.deleteProduct(payload?.uuid).pipe(
          map((response) => {
            return deleteProductSuccess({
              data: response,
            });
          }),
          catchError((error) => of(deleteProductFailure({ error: error })))
        );
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProductSuccess),
      tap((response) =>
        this.router.navigate(['/feeder/listing', response?.data?.listing], {
          replaceUrl: true,
        })
      ),
      map((response: any) => {
        return resetProduct();
      })
    )
  );
}
