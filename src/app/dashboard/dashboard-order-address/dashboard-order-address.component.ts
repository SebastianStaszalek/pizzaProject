import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order.model';
import {ActivatedRoute} from '@angular/router';
import {DashboardOrdersService} from '../dashboard-orders.service';

@Component({
  selector: 'app-dashboard-order-address',
  templateUrl: './dashboard-order-address.component.html',
  styleUrls: ['./dashboard-order-address.component.scss']
})
export class DashboardOrderAddressComponent implements OnInit {

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
