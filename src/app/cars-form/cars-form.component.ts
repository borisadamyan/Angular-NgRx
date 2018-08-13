import {Component, OnInit} from '@angular/core';
import {Car} from "../car.model";
import  * as moment from 'moment';
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";
import {AddCar} from "../redux/cars.action";
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css'],
  providers:[CarsService]
})
export class CarsFormComponent implements OnInit {
  private id: number = 2;
  carName = '';
  carModel = '';


  constructor(private  store: Store<AppState>, private carService: CarsService) { }

  ngOnInit() {
  }

  onAdd(){
    if(this.carModel === '' || this.carName === '') return;
    const date = moment().format('DD.MM.YY')
    const car  = new Car(
        this.carName,
        date,
        this.carModel
    );

    this.carService.addCar(car);

    this.carName = '';
    this.carModel = '';

  }
  onLoad(){
    this.carService.loadCars();
  }

}
