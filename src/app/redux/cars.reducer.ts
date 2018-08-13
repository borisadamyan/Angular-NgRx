import {Action} from "@ngrx/store";
import {Car} from "../car.model";
import {CAR_ACTION, CarsActions} from "./cars.action";

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '08.08.12', 'A4', false, 2),
  ]
};

export  function carsReducer(state = initialState, action: CarsActions ) {
  switch (action.type){
    case CAR_ACTION.ADD_CAR:
      return {
          ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter( c => c.id !== action.payload.id)]
      };
    case CAR_ACTION.UPDATE_CAR:
      const  indx =state.cars.findIndex(c => c.id === action.payload.id);
      state.cars[indx].isSold = true;
      return {
        ...state,
        cars: [...state.cars]
      };
    default:
      return state;
  }
}
