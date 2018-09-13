import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../model/order.model';
import {ActivatedRoute} from '@angular/router';
import {DashboardOrdersService} from '../dashboard-orders.service';
import {Dish} from '../../model/dish.model';
import {takeUntil} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';
import {DashboardDishesService} from '../dashboard-dishes.service';
import {OrderStatus} from '../../model/enum/order-status.enum';

@Component({
  selector: 'app-dashboard-order-details',
  templateUrl: './dashboard-order-details.component.html',
  styleUrls: ['./dashboard-order-details.component.scss']
})
export class DashboardOrderDetailsComponent implements OnInit, OnDestroy {

  order: Order;
  dishes: Dish[] = [];
  sub: Subscription;

  private readonly destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private dashboardOrdersService: DashboardOrdersService,
    private dashboardDishService: DashboardDishesService,
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
      this.dashboardDishService.getDish(dishId.dishId).pipe(takeUntil(this.destroy$))
        .subscribe(item => {
          this.dishes.push(item);
        });
    }
  }

  findDishById(id: number): Dish {
   const dish = this.dishes.find(item => item.id === id);
   return dish ? dish : <Dish>{};
  }

  changeStatusOfOrderToDelivered(): void {
    this.order.status = OrderStatus.Delivered;
    this.sub = this.dashboardOrdersService.update(this.order).subscribe();
  }

  changeStatusOfOrderToInTransit(): void {
    this.order.status = OrderStatus.InTransit;
    this.sub = this.dashboardOrdersService.update(this.order).subscribe();
  }

  changeStatusOfOrderToAccepted(): void {
    this.order.status = OrderStatus.Accepted;
    this.sub = this.dashboardOrdersService.update(this.order).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }



}
