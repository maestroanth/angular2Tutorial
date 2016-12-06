import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-httptest',
    templateUrl: './httptest.component.html',
    styleUrls: ['./httptest.component.css'],
  styles: []
})
export class HTTPTESTComponent implements OnInit {

  getData: string;
  postData: string;

  constructor(private httpget) { }
  onTestGet(){/*
      httpget.getCurrentTime().subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Get REQUEST FINISHED")
      );
  }
  ngOnInit() {
  }
*/
}
