import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class BroadcastService {
  constructor(private httpClient: HttpClient) {}

  loadBroadcasts(data: any = {}): Observable<any> {
    let url = data?.url && data?.isLoadMore ? data?.url : Endpoints.broadcast;

    return this.httpClient.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  loadBroadcast(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.broadcast + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createBroadcast(data: any = {}): Observable<any> {
    let cleanData: any = {};

    for (let k in data) {
      let value = data[k];

      if (value) cleanData[k] = value;
    }

    return this.httpClient.post(Endpoints.broadcast, cleanData).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateBroadcast(data: any = {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.broadcast + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteBroadcast(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.broadcast + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
