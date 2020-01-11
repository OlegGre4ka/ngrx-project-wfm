import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/shared/models/Car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() car: Car;
  @Output() deleteCar = new EventEmitter<Car>()
  constructor() { }

  ngOnInit() {
  }

  onDelete(id) {
    // this.deleteCar.emit(id)
    this.deleteCar.emit(id)

  }

  onBuy() {
    this.car.isSold = true;
  }
}
