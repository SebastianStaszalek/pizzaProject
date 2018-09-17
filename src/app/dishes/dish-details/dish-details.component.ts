import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../model/dish.model';
import {ActivatedRoute} from '@angular/router';
import {DishesService} from '../dishes.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit, OnDestroy {

  dish: Dish;

  private readonly destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesService
  ) { }

  ngOnInit() {
    this.getDish();
  }

  getDish(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dishesService.getDish(id).pipe(takeUntil(this.destroy$))
      .subscribe(dish => this.dish = dish);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
