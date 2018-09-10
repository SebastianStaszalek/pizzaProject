import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishesListComponent} from './dishes-list/dishes-list.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'dishes-list', pathMatch: 'full' },
  { path: 'dishes-list', component: DishesListComponent },
  { path: 'summary', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
