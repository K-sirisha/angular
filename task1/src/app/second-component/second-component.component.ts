import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor() { }
  isavailable = false;
  ngOnInit() {
  }
  myClickFunctionatRight(){
    this.isavailable = false;
  }
  myClickFunctionatLeft(){
    this.isavailable = true;

  }
}
