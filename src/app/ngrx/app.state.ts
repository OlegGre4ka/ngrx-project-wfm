import { Car } from '../shared/models/Car.model';

export interface AppState {
    carPage:{
        cars:Car[]
    }
}