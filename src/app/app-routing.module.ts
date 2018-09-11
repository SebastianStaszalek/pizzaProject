import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishesListComponent} from './dishes-list/dishes-list.component';
import {OrderComponent} from './order/order.component';
import {OrderInfoComponent} from './order-info/order-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'dishes-list', pathMatch: 'full' },
  { path: 'dishes-list', component: DishesListComponent },
  { path: 'summary', component: OrderComponent},
  { path: 'order-info', component: OrderInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
