import { Component } from '@angular/core';
import { Car, Cars } from './shared/models/Car.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars: Car[] = [
    // new Car('Ford', '12.12.12', 'Focus', false, 1),
    // new Car('Audi', '12.12.16', 'A4', false, 2),
    // new Car('Wolksvagen', '23.06.88', 'Golf', false, 3)
  ]

  onAdd(car: Car) {
    // console.log(car, 'car in app');
    this.cars.push(car);
  }

  onDelete(id) {
    // onDelete(id) {

    // const index = this.cars.findIndex(car=>car.id===id);
    // this.cars.splice(index,1);

    this.cars = this.cars.filter(c=>c.id!==id);
  }
}
