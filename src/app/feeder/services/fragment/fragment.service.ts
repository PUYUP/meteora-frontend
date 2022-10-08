import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class FragmentService {
  constructor(private httpClient: HttpClient) {}

  loadFragments(params: any = {}): Observable<any> {
    let url =
      params?.url && params?.isLoadMore ? params?.url : Endpoints.fragment;
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

  loadFragment(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.fragment + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createFragment(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.fragment, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateFragment(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.fragment + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteFragment(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.fragment + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
