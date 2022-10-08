import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  loadProducts(params: any = {}): Observable<any> {
    let url =
      params?.url && params?.isLoadMore ? params?.url : Endpoints.product;
    let httpParams = new HttpParams();

    for (let key in params) {
      let value = params[key];

      if (value && value != undefined) {
        if (key != 'url' && key != 'type' && value) {
          httpParams = httpParams.set(key, value);
        }
      }
    }

    return this.httpClient.get(url, { params: httpParams }).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  loadProduct(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.product + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createProduct(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.product, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateProduct(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.product + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteProduct(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.product + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
