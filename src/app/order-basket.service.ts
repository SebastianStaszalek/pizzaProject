import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from './model/dish.model';

@Injectable({
  providedIn: 'root'
})
export class OrderBasketService {

  basketPositions: Dish[] = [];

  constructor() {
  }

  addDishToBasket(dish: Dish) {
    this.basketPositions.push(dish);
  }

  removeDishFromBasket(dish: Dish) {
    this.basketPositions.slice();
  }

  getBasketPositions() {
    return this.basketPositions;
  }

}

