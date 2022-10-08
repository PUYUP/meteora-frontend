import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class RewardService {
  constructor(private httpClient: HttpClient) {}

  loadRewards(data: any = {}): Observable<any> {
    let url = data?.url && data?.isLoadMore ? data?.url : Endpoints.reward;
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

  loadReward(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.reward + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createReward(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.reward, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateReward(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.reward + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteReward(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.reward + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
