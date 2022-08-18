import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'map',
  template: `
   <div class="col-sm-10">
        <google-map [width]="1000" [height]="500" [options]="options" #map>
          <map-marker
          [position]="this.marker.getPosition()"
          [title]="marker.getTitle()">
          </map-marker>
        </google-map>
    </div>
    `,
    styles:[`
    
    `]

})
export class GoogleMapsComponent implements OnInit{
    @Input() festival:any ={};
    lat :number;
    lng :number
    options: google.maps.MapOptions;
    apiLoaded: Observable<boolean>;

     marker : google.maps.Marker= new google.maps.Marker({
      position: {lat:0, lng:0},
      title: "Festival map",
    });
    LatLng : google.maps.LatLng;

    ngOnInit(){
      this.lat  = this.festival?.location?.coordinates?.lat;
      this.lng = this.festival?.location?.coordinates?.lng;
      this.options= {
        center:   {lat : this.lat, lng :this.lng}, 
        zoom: 12};

        this.LatLng = new google.maps.LatLng(this.lat, this.lng);
        this.marker.setPosition(this.LatLng)  
    }

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCHEXU5CifiBNcedQXA9ziL3sra-aV7GRc', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
        
  }
}