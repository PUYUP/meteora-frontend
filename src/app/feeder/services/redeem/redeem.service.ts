import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class RedeemService {
  constructor(private httpClient: HttpClient) {}

  loadRedeems(params: any = {}): Observable<any> {
    let url =
      params?.url && params?.isLoadMore ? params?.url : Endpoints.redeem;
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

  loadRedeem(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.redeem + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createRedeem(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.redeem, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateRedeem(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.redeem + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteRedeem(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.redeem + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
