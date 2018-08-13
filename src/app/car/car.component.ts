import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../car.model";


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  @Output() delCar = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDeleteCar(){
    this.delCar.emit(this.car)
  }
  onBuy(){
    this.car.isSold = true;
  }
}
