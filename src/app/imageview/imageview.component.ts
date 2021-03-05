import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {JsonArray} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';

@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.css']
})
export class ImageviewComponent implements OnInit {
  @Input() images: JsonArray | undefined;

  JSON = JSON;
  constructor() {
    this.JSON = JSON;
  }
  getPhoto(jsonObj: any): string {
    jsonObj = jsonObj as JsonObject;
    return jsonObj.urls.regular;
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
