import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../model/order.model';
import {Subject} from 'rxjs';
import {DashboardOrdersService} from '../dashboard-orders.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-orders-list',
  templateUrl: './dashboard-orders-list.component.html',
  styleUrls: ['./dashboard-orders-list.component.scss']
})
export class DashboardOrdersListComponent implements OnInit, OnDestroy {

  orders: Order[];

  private readonly destroy$ = new Subject();

  constructor(
    private readonly dashboardOrdersService: DashboardOrdersService
  ) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.dashboardOrdersService.getOrders().pipe(takeUntil(this.destroy$))
      .subscribe(orders => this.orders = orders);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
