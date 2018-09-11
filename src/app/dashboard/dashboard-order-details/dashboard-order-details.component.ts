import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order.model';
import {ActivatedRoute} from '@angular/router';
import {DashboardOrdersService} from '../dashboard-orders.service';

@Component({
  selector: 'app-dashboard-order-details',
  templateUrl: './dashboard-order-details.component.html',
  styleUrls: ['./dashboard-order-details.component.scss']
})
export class DashboardOrderDetailsComponent implements OnInit {

  order: Order;

  constructor(
    private route: ActivatedRoute,
    private dashboardOrdersService: DashboardOrdersService
  ) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dashboardOrdersService.getOrder(id)
      .subscribe(order => this.order = order);
  }

}
