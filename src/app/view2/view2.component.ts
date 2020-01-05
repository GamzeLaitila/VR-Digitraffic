import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  dateSelected: any;
  response: any;
  trains: number;

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  ngOnInit() {
  }

  showSelectedDate(){

    let obs = this.http.get('https://rata.digitraffic.fi/api/v1/trains/' + this.datePipe.transform(this.dateSelected, "yyyy-MM-dd"));
    obs.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }
}
