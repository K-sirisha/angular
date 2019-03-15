import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
isavailable = false;
itemAdded = false;
itemNames = [];
itemName  ;
item;

  constructor() {
    setTimeout(() => {
      this.isavailable = true;
    },2000)
   }

  ngOnInit() {
  }
    onClick(){
     this.itemNames.push(this.itemName);
    this.itemName = '';
  }
  onClickRemove(i){
    this.itemNames.splice(i, 1);
  }
 
}
