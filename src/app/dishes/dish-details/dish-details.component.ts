import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish.model';
import {ActivatedRoute} from '@angular/router';
import {DishesService} from '../dishes.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  dish: Dish;

  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesService
  ) { }

  ngOnInit() {
    this.getDish();
  }

  getDish(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dishesService.getDish(id)
      .subscribe(dish => this.dish = dish);
  }

}
