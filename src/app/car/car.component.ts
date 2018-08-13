import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from "../car.model";
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";
import {DeleteCar, UpdateCar} from "../redux/cars.action";
import {CarsService} from "../cars.service";


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers:[CarsService]
})
export class CarComponent implements OnInit {
  @Input() car: Car;

  constructor(private store: Store<AppState>, private carsService: CarsService) { }

  ngOnInit() {
  }

  onDeleteCar(){
   this.carsService.deleteCar(this.car)
  }
  onBuy(){
    this.car.isSold = true;
    this.carsService.updateCar(this.car);
  }
}
