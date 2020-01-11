import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import { Car } from 'src/app/shared/models/Car.model';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent implements OnInit {
  private id: number = 2;
  carName: string = '';
  carModel: string = '';

  @Output() addCar = new EventEmitter<Car>()

  constructor() { }

  ngOnInit() {
  }

  onAddCar() {
    if (this.carName === '' || this.carModel === '') return;

    this.id = ++this.id;

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );
    console.log(car, 'car in cars')
    this.addCar.emit(car);

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {

  }
}
