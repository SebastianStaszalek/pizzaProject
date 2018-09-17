import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../model/dish.model';
import {ActivatedRoute} from '@angular/router';
import {DashboardDishesService} from '../dashboard-dishes.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-dish-details',
  templateUrl: './dashboard-dish-details.component.html',
  styleUrls: ['./dashboard-dish-details.component.scss']
})
export class DashboardDishDetailsComponent implements OnInit, OnDestroy {

  dish: Dish;

  private readonly destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private dashboardDishesService: DashboardDishesService
  ) { }

  ngOnInit() {
    this.getDish();
  }

  getDish(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dashboardDishesService.getDish(id).pipe(takeUntil(this.destroy$))
      .subscribe(dish => this.dish = dish);
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
