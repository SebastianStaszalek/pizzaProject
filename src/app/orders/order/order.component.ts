import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Order} from '../../model/order.model';
import {OrderService} from '../order.service';
import {OrderBasketService} from '../order-basket.service';
import {BasketDish} from '../../model/basket-dish.model';
import {OrderStatus} from '../../model/enum/order-status.enum';
import {Router} from '@angular/router';
import {OrderQuantity} from '../../model/order-quantity';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  sub: Subscription;
  order: Order;
  dishIds: OrderQuantity[];
  basketPositions: BasketDish[];

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

  constructor(
    readonly orderService: OrderService,
    readonly basketService: OrderBasketService,
    private router: Router
  ) {

    this.dishIds = <OrderQuantity[]>{};
    this.order = <Order>{};
  }

  onSubmit() {
    console.log(this.clientDetails.value);
  }

  ngOnInit(): void {
    this.getDishes();
  }

  addOrder(): void {
    this.order = this.clientDetails.value;
    this.order.dishIds = this.dishIds;
    this.order.status = OrderStatus.Accepted;
    this.order.date = new Date();
    this.order.totalCost = this.basketService.getBasketCost();
    this.orderService.addOrder(this.order).subscribe();
    this.router.navigate(['/order-info']);
  }

  getDishes(): void {
    this.basketPositions = this.basketService.getBasketPositions();

    for (const dish of this.basketPositions) {
    const position = new OrderQuantity();
    position.dishId = dish.id;
    position.quantity = dish.counter;
    this.dishIds.push(position);
    }
  }

}
