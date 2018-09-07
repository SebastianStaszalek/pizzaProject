import {Dish} from './dish.model';

export interface BasketDish extends Dish {
  counter: number;
}
