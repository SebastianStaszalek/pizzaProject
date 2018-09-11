import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import {HttpClientModule} from '@angular/common/http';
import { OrderBasketComponent } from './order-basket/order-basket.component';
import { OrderComponent } from './order/order.component';
import {ReactiveFormsModule} from '@angular/forms';
import { OrderInfoComponent } from './order-info/order-info.component';
import { DashboardDishesListComponent } from './dashboard-dishes-list/dashboard-dishes-list.component';
import { DashboardDishDetailsComponent } from './dashboard-dish-details/dashboard-dish-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    DishDetailsComponent,
    OrderBasketComponent,
    OrderComponent,
    OrderInfoComponent,
    DashboardDishesListComponent,
    DashboardDishDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
