import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish.model';
import {OrderBasketService} from '../order-basket.service';

@Component({
  selector: 'app-order-basket',
  templateUrl: './order-basket.component.html',
  styleUrls: ['./order-basket.component.scss']
})
export class OrderBasketComponent implements OnInit {

  dishes: Dish[];

  constructor(readonly service: OrderBasketService) { }

  ngOnInit(): void {
  }


}
