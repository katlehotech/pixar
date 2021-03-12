import { Component } from '@angular/core';
import { SearchService } from './search.service';
import {JsonArray, JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pixar';
  imageData: JsonArray | undefined;
  keyWord = '';
  constructor(private search: SearchService) {
  }
  getData(data: JsonArray): void {
    console.log(data);
  }
  setKeyword(keyword: string): void {
    this.keyWord = keyword;
    this.search.getImages(keyword).subscribe((data: JsonObject) => {
      this.imageData = data.results as JsonArray;
    });
  }
}
