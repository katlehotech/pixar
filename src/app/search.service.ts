import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment as ENV } from '../environments/environment';
import {JsonArray, JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClient: HttpClient) { }

  getImages(location: string | undefined): Observable<any> {
    return this.httpClient.get(ENV.Unsplash_Api_Base_url + ENV.Unsplash_Search_route + '?query=' + location + '&orientation=squarish', {
      headers: {
        Authorization: 'Client-ID ' + ENV.Unsplash_Access_key,
        'Content-Type': 'application/json'
      }
    });
  }
}
