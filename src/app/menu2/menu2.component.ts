import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  fruits = ['banana', 'apple', 'orange', 'strawberry'];

  selectedFruit: string ;

  constructor() { }

  ngOnInit() {
  }

  changeColor(fruit: string) {
    this.selectedFruit = fruit;
  }

  isChoosed(fruit: string) {
    return this.selectedFruit === fruit;
  }
}
