import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  url = 'https://www.flickr.com/services/api/search';
  // tslint:disable-next-line:typedef
  getImages() {
    fetch(this.url).then(response => {
      console.log('Data: ' + response.body);
    }).catch((error) => {
      console.log('Error: ' + error.stack);
    });
  }
}
