import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Order} from '../model/order.model';
import {OrderService} from '../order.service';
import {DishesService} from '../dishes.service';
import {OrderBasketService} from '../order-basket.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  sub: Subscription;
  order: Order;
  dishIds: number[];

  clientDetails = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    eMail: new FormControl(''),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    buildingNumber: new FormControl('', Validators.required),
    apartmentNumber: new FormControl(''),
  });

  constructor(readonly orderService: OrderService, readonly basketService: OrderBasketService) {
    this.dishIds = [];
    this.order = <Order>{};
  }

  onSubmit() {
    console.log(this.clientDetails.value);
  }

  addOrder() {
    this.order = this.clientDetails.value;
    this.order.dishIds = this.dishIds;
    this.orderService.addOrder(this.order).subscribe();
  }

}
