import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardOrdersService {

  constructor(
    readonly http: HttpClient,
  ) {
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/orders');
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`/api/orders/${id}`);
  }

  changeStatusOfOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`/api/orders/${order.id}`, order);
  }
}
