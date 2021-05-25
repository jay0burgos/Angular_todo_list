import { Component } from '@angular/core';

//since this is the root component it's selector is the root index
//holds the html and css that is going to be served for this app's component w
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//add properties and methods
export class AppComponent {
  
}
//to display this variable use {{title}}
//any java script expression can be done