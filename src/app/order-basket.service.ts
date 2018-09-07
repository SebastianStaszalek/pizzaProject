import {Injectable} from '@angular/core';
import {Dish} from './model/dish.model';
import {BasketDish} from './model/basket-dish.model';

@Injectable({
  providedIn: 'root'
})
export class OrderBasketService {

  basketPositions: BasketDish[] = [];
  index: number;
  basketCost: number;

  constructor() {
    this.basketCost = 0;
  }

  addDishToBasket(dish: BasketDish) {
    const index: number = this.basketPositions.findIndex(i => i.id === dish.id);
    if (index === -1) {
      dish.counter = 1;
      this.basketPositions.push(dish);
    } else {
      this.basketPositions[index].counter++;
    }
    this.calculateBasketCost();
  }

  removeDishFromBasket(dish: BasketDish) {
    const index: number = this.basketPositions.findIndex(i => i.id === dish.id);
    if (index !== -1 && dish.counter > 1) {
      dish.counter--;
    } else {
      this.basketPositions.splice(this.index, 1);
    }
    this.calculateBasketCost();
  }

  calculateBasketCost() {
    this.basketCost = 0;
    for (const position of this.basketPositions) {
      this.basketCost += position.counter * position.price;
    }
  }

  getBasketPositions() {
    return this.basketPositions;
  }

  getBasketCost(): number {
    return Math.round(this.basketCost * 100) / 100;
  }

}

