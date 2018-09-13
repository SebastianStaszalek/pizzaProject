import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../model/order.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    readonly http: HttpClient,
    ) { }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('/api/orders', order);
  }

}
