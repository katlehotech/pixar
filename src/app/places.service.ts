import { Injectable } from '@angular/core';
import { environment as ENV } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  constructor(private httpClient: HttpClient) { }
  getPlaces(place: string): Observable<any> {
    return this.httpClient.get(ENV.Foursquare_location_call + '&query=' + place, {
      headers: {
        'Content-Type': 'text/plain',
      }
    });
  }
}
