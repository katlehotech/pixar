import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImageviewComponent} from './imageview/imageview.component';
import {PlacesviewComponent} from './placesview/placesview.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  {path: '', component: PlacesviewComponent},
  {path: 'images/:location', component: ImageviewComponent},
  {path: 'details/:data', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
