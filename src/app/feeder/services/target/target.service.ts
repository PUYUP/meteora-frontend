import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class TargetService {
  constructor(private httpClient: HttpClient) {}

  loadTargets(data: any = {}): Observable<any> {
    let url = data?.url && data?.isLoadMore ? data?.url : Endpoints.target;
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

  loadTarget(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.target + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createTarget(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.target, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateTarget(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.target + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteTarget(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.target + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
