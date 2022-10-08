import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class TakenService {
  constructor(private httpClient: HttpClient) {}

  loadTakens(data: any = {}): Observable<any> {
    let url = data?.url && data?.isLoadMore ? data?.url : Endpoints.taken;
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

  loadTaken(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.taken + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createTaken(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.taken, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateTaken(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.taken + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteTaken(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.taken + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
