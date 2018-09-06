import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishesListComponent} from './dishes-list/dishes-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dishes-list', pathMatch: 'full' },
  { path: 'dishes-list', component: DishesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
