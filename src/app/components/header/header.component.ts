import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'task manager'; 
  counter: number = 0; 
  color: string = "red";
  constructor() { }

  //lifecycle method 
  ngOnInit(): void {}

  toggleAddTask() {
    this.counter +=1;
    console.log('toggle');
  }
  subtract(){
    this.counter -=1;
  }

}
