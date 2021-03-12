import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: JsonObject | undefined;
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.details = JSON.parse(this.actRoute.snapshot.params.data) as JsonObject;
  }
  getDetails(attr: any): string {
    switch (attr) {
      case 'width':
        attr = this.details?.width;
        break;
      case 'height':
        attr = this.details?.height;
        break;
      case 'user':
        attr = this.details?.user;
        break;
      case 'created_at':
        attr = this.details?.created_at;
        break;
      default:
        break;
    }
    return attr;
  }
}
