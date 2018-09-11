import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishesListComponent} from './dishes/dishes-list/dishes-list.component';
import {OrderComponent} from './orders/order/order.component';
import {OrderInfoComponent} from './orders/order-info/order-info.component';
import {DashboardDishesListComponent} from './dashboard/dashboard-dishes-list/dashboard-dishes-list.component';
import {DashboardDishDetailsComponent} from './dashboard/dashboard-dish-details/dashboard-dish-details.component';
import {DashboardOrdersListComponent} from './dashboard/dashboard-orders-list/dashboard-orders-list.component';
import {DashboardOrderDetailsComponent} from './dashboard/dashboard-order-details/dashboard-order-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'dishes-list', pathMatch: 'full' },
  { path: 'dishes-list', component: DishesListComponent },
  { path: 'summary', component: OrderComponent},
  { path: 'order-info', component: OrderInfoComponent},
  { path: 'dashboard-dishes-list', component: DashboardDishesListComponent},
  { path: 'dashboard-dish-details/:id', component: DashboardDishDetailsComponent},
  { path: 'dashboard-orders-list', component: DashboardOrdersListComponent},
  { path: 'dashboard-order-details/:id', component: DashboardOrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
