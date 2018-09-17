import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {Order} from '../../model/order.model';
import {OrderService} from '../order.service';
import {OrderBasketService} from '../order-basket.service';
import {BasketDish} from '../../model/basket-dish.model';
import {OrderStatus} from '../../model/enum/order-status.enum';
import {Router} from '@angular/router';
import {OrderQuantity} from '../../model/order-quantity';
import * as moment from 'moment';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  order: Order;
  dishIds: OrderQuantity[] = [];
  basketPositions: BasketDish[];

  private readonly destroy$ = new Subject();

  clientDetails = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
    eMail: new FormControl('', Validators.email),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    buildingNumber: new FormControl('', Validators.required),
    apartmentNumber: new FormControl(''),
  });

  constructor(
    private readonly orderService: OrderService,
    private readonly basketService: OrderBasketService,
    private router: Router
  ) {
    this.order = <Order>{};
  }

  ngOnInit(): void {
    this.getDishes();
  }

  addOrder(): void {
    this.order = this.clientDetails.value;
    this.order.dishIds = this.dishIds;
    this.order.status = OrderStatus.Accepted;
    this.order.date = moment().format('YYYY-MM-DD HH:mm');
    this.order.totalCost = this.basketService.getBasketCost();

    this.orderService.addOrder(this.order).subscribe(() => {
      this.basketService.clearBasket();
      this.router.navigate(['/order-info']);
    });


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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
