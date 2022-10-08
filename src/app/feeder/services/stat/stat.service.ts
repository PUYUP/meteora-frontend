import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  constructor(private httpClient: HttpClient) {}

  loadStat(): Observable<any> {
    return this.httpClient.get(Endpoints.stat).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
