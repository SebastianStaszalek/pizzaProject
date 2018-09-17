import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishesListComponent} from './dishes/dishes-list/dishes-list.component';
import {OrderComponent} from './orders/order/order.component';
import {OrderInfoComponent} from './orders/order-info/order-info.component';
import {DashboardDishesListComponent} from './dashboard/dashboard-dishes-list/dashboard-dishes-list.component';
import {DashboardDishDetailsComponent} from './dashboard/dashboard-dish-details/dashboard-dish-details.component';
import {DashboardOrdersListComponent} from './dashboard/dashboard-orders-list/dashboard-orders-list.component';
import {DashboardOrderDetailsComponent} from './dashboard/dashboard-order-details/dashboard-order-details.component';
import {DashboardOrderAddressComponent} from './dashboard/dashboard-order-address/dashboard-order-address.component';
import {LoginComponent} from './credentials/login/login.component';
import {LoginGuard} from './credentials/guard/loginGuard';
import {AdminPanelComponent} from './dashboard/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', redirectTo: 'dishes-list', pathMatch: 'full' },
  { path: 'dishes-list', component: DishesListComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin-panel', component: AdminPanelComponent, canActivate: [LoginGuard],
    children: [
      { path: 'dashboard-dishes-list', component: DashboardDishesListComponent, canActivate: [LoginGuard]},
      { path: 'dashboard-orders-list', component: DashboardOrdersListComponent, canActivate: [LoginGuard]}
    ]
  },
  { path: 'summary', component: OrderComponent},
  { path: 'order-info', component: OrderInfoComponent},
  { path: 'dashboard-dish-details/:id', component: DashboardDishDetailsComponent, canActivate: [LoginGuard]},
  { path: 'dashboard-order-details/:id', component: DashboardOrderDetailsComponent, canActivate: [LoginGuard]},
  { path: 'dashboard-order-address/:id', component: DashboardOrderAddressComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
