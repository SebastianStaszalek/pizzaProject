import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../model/order.model';
import {ActivatedRoute} from '@angular/router';
import {DashboardOrdersService} from '../dashboard-orders.service';
import {DishesService} from '../../dishes/dishes.service';
import {Dish} from '../../model/dish.model';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-dashboard-order-details',
  templateUrl: './dashboard-order-details.component.html',
  styleUrls: ['./dashboard-order-details.component.scss']
})
export class DashboardOrderDetailsComponent implements OnInit, OnDestroy {

  order: Order;
  dishes: Dish[] = [];

  private readonly destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private dashboardOrdersService: DashboardOrdersService,
    private dishService: DishesService
  ) {
    this.order = <Order>{};
  }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dashboardOrdersService.getOrder(id)
      .subscribe(order => {
        this.order = order;
        this.getDishes();
      });
  }

  getDishes(): void {
    for (const dishId of this.order.dishIds) {
      this.dishService.getDish(dishId.dishId).pipe(takeUntil(this.destroy$))
        .subscribe(item => {
          this.dishes.push(item);
        });
    }
  }

  findDishById(id: number): Dish {
   return this.dishes.find(item => item.id === id);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
