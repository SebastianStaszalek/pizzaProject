import {Injectable} from '@angular/core';
import {Dish} from './model/dish.model';

@Injectable({
  providedIn: 'root'
})
export class OrderBasketService {

  basketPositions: Dish[] = [];
  index: number;
  basketCost: number;

  constructor() {
    this.basketCost = 0;
  }

  addDishToBasket(dish: Dish) {
    this.basketPositions.push(dish);
    this.calculateBasketCost();
  }

  removeDishFromBasket(dish: Dish) {
    this.index = this.basketPositions.indexOf(dish);
    this.basketPositions.splice(this.index, 1);
    this.calculateBasketCost();
  }

  calculateBasketCost() {
    this.basketCost = 0;
    this.basketPositions.forEach(dish => this.basketCost += +dish.price);
  }

  getBasketPositions() {
    return this.basketPositions;
  }

  getBasketCost(): number {
    return this.basketCost;
  }

}

