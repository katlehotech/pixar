import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.css']
})
export class ImageviewComponent implements OnInit {
  images = ['assets/images/samples/cape_town.jpg', 'assets/images/samples/cape_devils.jpg', 'assets/images/samples/cape_table.jpg'];


  constructor() { }

  ngOnInit(): void {
  }

}
