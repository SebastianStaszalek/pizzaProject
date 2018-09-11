import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishesListComponent} from './dishes-list/dishes-list.component';
import {OrderComponent} from './order/order.component';
import {OrderInfoComponent} from './order-info/order-info.component';
import {DashboardDishesListComponent} from './dashboard-dishes-list/dashboard-dishes-list.component';
import {DashboardDishDetailsComponent} from './dashboard-dish-details/dashboard-dish-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'dishes-list', pathMatch: 'full' },
  { path: 'dishes-list', component: DishesListComponent },
  { path: 'summary', component: OrderComponent},
  { path: 'order-info', component: OrderInfoComponent},
  { path: 'dashboard-dishes-list', component: DashboardDishesListComponent},
  { path: 'dashboard-dish-details/:id', component: DashboardDishDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
