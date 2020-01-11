// import {Action} from '@ngrx/store';
import { Car } from '../shared/models/Car.model';
import { CAR_ACTION, AddCar } from './cars.action';

const initialState = {
    cars:[
        new Car('Ford', '12.12.12', 'Focus', false, 1),
        new Car('Audi', '12.12.16', 'A4', false, 2),
        new Car('Wolksvagen', '23.06.88', 'Golf', false, 3)
    ]
}

export function carsReducer (state = initialState, action:AddCar){
switch(action.type){
    case CAR_ACTION.ADD_CAR :
        // console.log( {...state} ,'...state in reducer');
        return{
            ...state,
            cars: [...state.cars, action.payload]
        }
    default:
        return state
}
}