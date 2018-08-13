import {Component, OnInit} from '@angular/core';
import {Cars} from "./car.model";
import {Store} from "@ngrx/store";
import {AppState} from "./redux/app.state";
import {Observable} from "rxjs/index";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public carsState: Observable<Cars>;

  constructor(private store: Store<AppState>){}
  ngOnInit(){
    /*this.store.select('carPage').subscribe(({cars}) => {
      this.cars = cars;
    })*/
    this.carsState = this.store.select('carPage');
  }
}
