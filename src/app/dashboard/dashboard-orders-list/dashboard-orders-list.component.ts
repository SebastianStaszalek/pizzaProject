import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../model/order.model';
import {Subscription} from 'rxjs';
import {DashboardOrdersService} from '../dashboard-orders.service';

@Component({
  selector: 'app-dashboard-orders-list',
  templateUrl: './dashboard-orders-list.component.html',
  styleUrls: ['./dashboard-orders-list.component.scss']
})
export class DashboardOrdersListComponent implements OnInit, OnDestroy {

  orders: Order[];
  sub: Subscription;

  constructor(
    readonly dashboardOrdersService: DashboardOrdersService
  ) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.sub = this.dashboardOrdersService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
