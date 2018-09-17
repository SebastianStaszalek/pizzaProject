import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../model/order.model';
import {ActivatedRoute} from '@angular/router';
import {DashboardOrdersService} from '../dashboard-orders.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-order-address',
  templateUrl: './dashboard-order-address.component.html',
  styleUrls: ['./dashboard-order-address.component.scss']
})
export class DashboardOrderAddressComponent implements OnInit, OnDestroy {

  order: Order;

  private readonly destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private dashboardOrdersService: DashboardOrdersService
  ) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dashboardOrdersService.getOrder(id).pipe(takeUntil(this.destroy$))
      .subscribe(order => this.order = order);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
