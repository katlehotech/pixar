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

  getImages(search: string): Observable<any> {
    return this.httpClient.get(ENV.Api_Base_url + ENV.Search_route + '?query=' + search, {
      headers: {
        Authorization: 'Client-ID ' + ENV.Access_key,
        'Content-Type': 'application/json'
      }
    });
  }
}
