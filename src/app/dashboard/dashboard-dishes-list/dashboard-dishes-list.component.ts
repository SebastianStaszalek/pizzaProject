import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardDishesService} from '../dashboard-dishes.service';
import {Dish} from '../../model/dish.model';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-dishes-list',
  templateUrl: './dashboard-dishes-list.component.html',
  styleUrls: ['./dashboard-dishes-list.component.scss']
})
export class DashboardDishesListComponent implements OnInit, OnDestroy {

  dishes: Dish[];
  sub: Subscription;

  private readonly destroy$ = new Subject();

  constructor(
    private readonly dashboardDishesService: DashboardDishesService
  ) {
  }

  ngOnInit() {
    this.getDishes();
  }

  getDishes(): void {
    this.sub = this.dashboardDishesService.getDishes().pipe(takeUntil(this.destroy$))
      .subscribe(dishes => this.dishes = dishes);
  }

  changeAvailability(dish: Dish): void {
    dish.isAvailable = !dish.isAvailable;
    this.dashboardDishesService.update(dish).pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
