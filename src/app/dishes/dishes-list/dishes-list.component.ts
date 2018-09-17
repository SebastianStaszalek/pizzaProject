import {Component, OnDestroy, OnInit} from '@angular/core';
import {DishesService} from '../dishes.service';
import {Dish} from '../../model/dish.model';
import {Subject} from 'rxjs';
import {OrderBasketService} from '../../orders/order-basket.service';
import {BasketDish} from '../../model/basket-dish.model';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit, OnDestroy {
  dishes: Dish[];
  active: string;

  private readonly destroy$ = new Subject();

  constructor(
    private readonly service: DishesService,
    private readonly orderService: OrderBasketService
  ) {
  }

  ngOnInit(): void {
    this.getPizza();
  }

  addDishToOrder(dish: Dish) {
    this.orderService.addDishToBasket(<BasketDish>dish);
  }

  getPizza(): void {
    this.active = 'pizza';
    this.service.getPizza().pipe(takeUntil(this.destroy$))
      .subscribe(pizza => this.dishes = pizza);
  }

  getPasta(): void {
    this.active = 'pasta';
    this.service.getPasta().pipe(takeUntil(this.destroy$))
      .subscribe(pasta => this.dishes = pasta);
  }

  getBeverage(): void {
    this.active = 'beverage';
    this.service.getBeverage().pipe(takeUntil(this.destroy$))
      .subscribe(beverage => this.dishes = beverage);
  }

  changeColorOfButton(): void {

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
