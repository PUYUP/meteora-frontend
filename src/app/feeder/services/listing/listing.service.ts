import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private httpClient: HttpClient) {}

  loadListings(data: any = {}): Observable<any> {
    let url = data?.url && data?.isLoadMore ? data?.url : Endpoints.listing;

    return this.httpClient.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  loadListing(uuid: string): Observable<any> {
    return this.httpClient.get(Endpoints.listing + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createListing(data: {}): Observable<any> {
    return this.httpClient.post(Endpoints.listing, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateListing(data: {}, uuid: string): Observable<any> {
    return this.httpClient.patch(Endpoints.listing + uuid + '/', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  deleteListing(uuid: string): Observable<any> {
    return this.httpClient.delete(Endpoints.listing + uuid + '/').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
