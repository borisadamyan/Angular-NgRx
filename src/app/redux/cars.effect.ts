import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {AddCar, CAR_ACTION} from "./cars.action";

import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/switchMap'

import {Car} from "../car.model";
import {CarsService} from "../cars.service";

@Injectable()
export class CarsEffect{
  constructor(private  actions$: Actions, private carService: CarsService){}

@Effect() loadCars = this.actions$.ofType(CAR_ACTION.ADD_CAR)
    .switchMap((action: AddCar) => {
    return this.carService.preloadCars();
    })
    .mergeMap((cars: Car[]) => {
    return [
      {
        type: CAR_ACTION.LOAD_CARS,
        payload: cars
      }
    ]
    })
}