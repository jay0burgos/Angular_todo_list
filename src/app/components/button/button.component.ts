import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "I'm blue";
  @Input() color: string = "blue";
  @Output() btnClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {}

    onClick(){
      this.btnClick.emit(); //when button is click, button html calls this function which then 
                            //(continue)emits btnClick to be caught in header html
      if(this.color != "green"){
        this.color = "green";
        this.text = "I'm green"
      }
      else{
        this.color = "blue";
        this.text = "I'm blue"
      }

      
    }
}
