import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {JsonArray} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {SearchService} from '../search.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.css']
})
export class ImageviewComponent implements OnInit {
  images: JsonArray | undefined;
  constructor(private search: SearchService, private actRoute: ActivatedRoute) {
  }
  getPhoto(jsonObj: any): string[] {
    jsonObj = jsonObj as JsonObject;
    const details = {width: jsonObj.width, height: jsonObj.height, user: jsonObj.user?.name, created_at: jsonObj.created_at};
    return [jsonObj.urls.regular, JSON.stringify(details)];
  }

  getImages(location: string | undefined): void {
    this.search.getImages(location).subscribe((data: JsonObject) => {
      this.images = data.results as JsonArray;
      console.log(this.images);
    }, error => console.log(error), () => {
      console.warn('DONE');
    });
  }

  ngOnInit(): void {
    this.getImages(this.actRoute.snapshot.params.location);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
