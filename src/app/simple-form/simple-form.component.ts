import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
  styles: []
})
export class SimpleFormComponent implements OnInit {

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
/*
NOTE:
 when there are paranthesis () in html code, it's referring to a DOM event
 for the $event variable to capture. So (click) can capture (mousehover) too
 */
