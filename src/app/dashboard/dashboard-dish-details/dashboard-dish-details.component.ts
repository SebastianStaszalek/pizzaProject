import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish.model';
import {ActivatedRoute} from '@angular/router';
import {DashboardDishesService} from '../dashboard-dishes.service';

@Component({
  selector: 'app-dashboard-dish-details',
  templateUrl: './dashboard-dish-details.component.html',
  styleUrls: ['./dashboard-dish-details.component.scss']
})
export class DashboardDishDetailsComponent implements OnInit {

  dish: Dish;

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

}
