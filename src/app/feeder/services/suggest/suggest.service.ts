import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class SuggestService {
  constructor(private httpClient: HttpClient) {}

  loadSuggests(params: any = {}): Observable<any> {
    let url =
      params?.url && params?.isLoadMore ? params?.url : Endpoints.suggest;
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

  loadSuggest(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.suggest + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createSuggest(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.suggest, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateSuggest(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.suggest + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteSuggest(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.suggest + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
