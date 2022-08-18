import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { GoogleMapsComponent } from './google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapRoutingModule } from './map-routing.module';



@NgModule({
  declarations: [
    MapComponent,
    GoogleMapsComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    GoogleMapsModule,
  ]
})
export class MapModule { }
