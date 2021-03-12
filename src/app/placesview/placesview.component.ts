import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PlacesService} from '../places.service';
import {JsonArray, JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';


@Component({
  selector: 'app-placesview',
  templateUrl: './placesview.component.html',
  styleUrls: ['./placesview.component.css']
})
export class PlacesviewComponent implements OnInit {
  @Input() keyword: string | undefined;
  responseObject: JsonArray | undefined;
 JSON: JSON;
  constructor(private places: PlacesService) {
    this.JSON = JSON;
  }
  ngOnInit(): void {
  }
  getVenue(place: any): string[] {
    const response = new Array<string>();
    const venue = place.venue as JsonObject;
    response.push(venue.name as string); /* name */
    const loc = venue.location as JsonObject;
    response.push(loc.formattedAddress as string); /* address */
    response.push(venue.name as string); /* name */
    return response;
  }

  getPlaces(place: string): void {
   this.places.getPlaces(place).subscribe((data: JsonObject) => {
      this.responseObject = (((data.response as JsonObject).groups as JsonArray)[0] as JsonObject).items as JsonArray;
    });
  }

  search(value: string): void {
    this.getPlaces(value);
  }

}
