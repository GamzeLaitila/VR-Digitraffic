import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  lat: number;
  lng: number;
  zoom: number;

  constructor() { }

  ngOnInit() {
    this.lat = 62;
    this.lng = 26;
    this.zoom = 6.2;
  }

  mapClicked($event: MouseEvent) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    
    //console.log('from map component: ' + this.lat, this.lng);
  }
}
