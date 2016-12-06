import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: []
})
export class AppComponent {
  title = 'Let\'s Eat Monkeys!';
  /*directives: (HTTPTEST)*/
  constructor (
    @Inject('mail') private mail,
    @Inject('api') private api,
    /*@Inject('httpget') private httpget,*/
   ){}
}
