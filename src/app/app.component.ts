import { Component, OnInit } from '@angular/core';
import { Car, Cars } from './shared/models/Car.model';
import { Store } from '@ngrx/store';
import { AppState } from './ngrx/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  cars: Car[] = [
    // new Car('Ford', '12.12.12', 'Focus', false, 1),
    // new Car('Audi', '12.12.16', 'A4', false, 2),
    // new Car('Wolksvagen', '23.06.88', 'Golf', false, 3)
  ]

  // appState: Observable<Cars>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('carPage').subscribe(
      // data => {
      //   console.log(data, 'data from store');
      //   this.cars = data.cars
      // }
      ({cars})=> this.cars = cars
    )
    // this.appState = this.store.select('carPage')
  }

  onAdd(car: Car) {
    // console.log(car, 'car in app');
    this.cars.push(car);
  }

  onDelete(id) {
    // onDelete(id) {

    // const index = this.cars.findIndex(car=>car.id===id);
    // this.cars.splice(index,1);

    this.cars = this.cars.filter(c => c.id !== id);
  }
}
