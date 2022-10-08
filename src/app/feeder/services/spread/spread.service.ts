import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class SpreadService {
  constructor(private httpClient: HttpClient) {}

  loadSpreads(data: any = {}): Observable<any> {
    let url = data?.url && data?.isLoadMore ? data?.url : Endpoints.spread;
    let httpParams = new HttpParams();

    for (let key in data) {
      httpParams = httpParams.set(key, data[key]);
    }

    return this.httpClient.get(url, { params: httpParams }).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  loadSpread(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.spread + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createSpread(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.spread, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateSpread(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.spread + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteSpread(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.spread + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
