import {Action} from '@ngrx/store';
import { Car } from '../shared/models/Car.model';

const initialState = {
    casrs:[
        new Car('Ford', '12.12.12', 'Focus', false, 1),
        new Car('Audi', '12.12.16', 'A4', false, 2),
        new Car('Wolksvagen', '23.06.88', 'Golf', false, 3)
    ]
}

export function carsReducer (state = initialState, action:Action){
switch(action.type){
    default:
        return state
}
}