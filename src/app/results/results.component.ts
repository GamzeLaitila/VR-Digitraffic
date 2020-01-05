import { Component, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnChanges {

  @Input() latKoor: number;
  @Input() lngKoor: number;

  latKoor_min: number;
  latKoor_max: number;
  lngKoor_min: number;
  lngKoor_max: number;

  trainGPS: any;

  control: number = 0;

  constructor(private http: HttpClient) { }

  ngOnChanges() {

    console.log('from teams component: ' + this.latKoor_min, this.lngKoor_min);
   

    this.latKoor_min = this.latKoor - 1;
    this.latKoor_max = this.latKoor + 1;
    this.lngKoor_min = this.lngKoor - 1;
    this.lngKoor_max = this.lngKoor + 1;

    //console.log(this.latKoor_min, this.latKoor_max, this.lngKoor_min, this.lngKoor_max);

    let url = 'https://rata.digitraffic.fi/api/v1/train-locations/latest?bbox='
             + this.lngKoor_min
             + ',' + this.latKoor_min
             + ',' + this.lngKoor_max
             + ',' + this.latKoor_max
    this.http
      .get(url)
      .subscribe((trainGPS: any) => {
        this.trainGPS = trainGPS;
        console.log(trainGPS); // kontrol icin sayfada developer tool-console dan bakabilirsin gelen objenin ozelliklerine
      });
  }
}
