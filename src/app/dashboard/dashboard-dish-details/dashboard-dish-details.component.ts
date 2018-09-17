import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../model/dish.model';
import {ActivatedRoute} from '@angular/router';
import {DashboardDishesService} from '../dashboard-dishes.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-dish-details',
  templateUrl: './dashboard-dish-details.component.html',
  styleUrls: ['./dashboard-dish-details.component.scss']
})
export class DashboardDishDetailsComponent implements OnInit {

  dish: Dish;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dashboardDishesService: DashboardDishesService
  ) { }

  ngOnInit() {
    this.getDish();
  }

  getDish(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dashboardDishesService.getDish(id)
      .subscribe(dish => this.dish = dish);
  }

  changeAvailability(dish: Dish): void {
    dish.isAvailable = !dish.isAvailable;
    this.sub = this.dashboardDishesService.update(dish).subscribe();
  }

}
