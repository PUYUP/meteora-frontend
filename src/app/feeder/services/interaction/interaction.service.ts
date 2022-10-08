import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  constructor(private httpClient: HttpClient) {}

  loadInteractions(params: any = {}): Observable<any> {
    let url =
      params?.url && params?.isLoadMore ? params?.url : Endpoints.interaction;
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

  loadInteraction(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.interaction + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createInteraction(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.interaction, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateInteraction(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.interaction + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteInteraction(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.interaction + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
