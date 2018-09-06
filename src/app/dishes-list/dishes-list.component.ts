import {Component, OnDestroy, OnInit} from '@angular/core';
import {DishesService} from '../dishes.service';
import {Dish} from '../model/dish.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit, OnDestroy {
  dishes: Dish[];
  sub: Subscription;

  constructor(
    readonly service: DishesService
  ) { }

  ngOnInit(): void {
    this.getPizza();
  }

  getDishes(): void {
    this.sub = this.service.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }

  getPizza(): void {
    this.sub = this.service.getPizza()
      .subscribe(pizza => this.dishes = pizza);
  }

  getPasta(): void {
    this.sub = this.service.getPasta()
      .subscribe(pasta => this.dishes = pasta);
  }

  getBeverage(): void {
    this.sub = this.service.getBeverage()
      .subscribe(beverage => this.dishes = beverage);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
