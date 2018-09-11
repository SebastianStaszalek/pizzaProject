import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardDishesService} from '../dashboard-dishes.service';
import {Dish} from '../../model/dish.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-dishes-list',
  templateUrl: './dashboard-dishes-list.component.html',
  styleUrls: ['./dashboard-dishes-list.component.scss']
})
export class DashboardDishesListComponent implements OnInit, OnDestroy {

  dishes: Dish[];
  sub: Subscription;

  constructor(
    readonly dashboardDishesService: DashboardDishesService
  ) {
  }

  ngOnInit() {
    this.getDishes();
  }

  getDishes(): void {
    this.sub = this.dashboardDishesService.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
