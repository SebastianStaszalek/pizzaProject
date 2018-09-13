import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {DishesListComponent} from './dishes/dishes-list/dishes-list.component';
import {DishDetailsComponent} from './dishes/dish-details/dish-details.component';
import {HttpClientModule} from '@angular/common/http';
import {OrderBasketComponent} from './orders/order-basket/order-basket.component';
import {OrderComponent} from './orders/order/order.component';
import {ReactiveFormsModule} from '@angular/forms';
import {OrderInfoComponent} from './orders/order-info/order-info.component';
import {DashboardDishesListComponent} from './dashboard/dashboard-dishes-list/dashboard-dishes-list.component';
import {DashboardDishDetailsComponent} from './dashboard/dashboard-dish-details/dashboard-dish-details.component';
import {DashboardOrdersListComponent} from './dashboard/dashboard-orders-list/dashboard-orders-list.component';
import {DashboardOrderDetailsComponent} from './dashboard/dashboard-order-details/dashboard-order-details.component';
import {DashboardOrderAddressComponent} from './dashboard/dashboard-order-address/dashboard-order-address.component';
import {LoginComponent} from './credentials/login/login.component';
import {LoginGuard} from './credentials/guard/loginGuard';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    DishDetailsComponent,
    OrderBasketComponent,
    OrderComponent,
    OrderInfoComponent,
    DashboardDishesListComponent,
    DashboardDishDetailsComponent,
    DashboardOrdersListComponent,
    DashboardOrderDetailsComponent,
    DashboardOrderAddressComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}


//TODO: modyfikatory dostepu!
//TODO: sprawdz OnDestroy takeUntil
//TODO: moment.js
//TODO: zablokuj przycisk w formularzu zanim pola beda wypelnione
