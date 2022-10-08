import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  loadOrders(data: any = {}): Observable<any> {
    let url = data?.url && data?.isLoadMore ? data?.url : Endpoints.order;

    return this.httpClient.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  loadOrder(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.order + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createOrder(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.order, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateOrder(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.order + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteOrder(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.order + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
