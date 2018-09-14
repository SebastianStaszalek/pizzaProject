import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishesListComponent} from './dishes-list.component';
import {DishesService} from '../dishes.service';
import {OrderBasketService} from '../../orders/order-basket.service';
import {of} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {OrderBasketComponent} from '../../orders/order-basket/order-basket.component';
import {OrderService} from '../../orders/order.service';
import {Dish} from '../../model/dish.model';

fdescribe('DishesListComponent', () => {
  let component: DishesListComponent;
  let fixture: ComponentFixture<DishesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishesListComponent,
        OrderBasketComponent],
      imports: [
        HttpClientModule
      ],
      providers: [
        DishesService,
        OrderBasketService
      ]
    })
      .compileComponents();
    const dishesService = TestBed.get(DishesService);
    const getPizzaSpy = spyOn(dishesService, 'getPizza').and.returnValue(of([]));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPizza when ngOnInit', () => {
    const componentGetPizzaSpy = spyOn(component, 'getPizza').and.returnValue(of(null));

    component.ngOnInit();

    expect(componentGetPizzaSpy).toHaveBeenCalled();
  });

  it('should call dishService when getPasta', () => {
    // given
    const dishesService = TestBed.get(DishesService);
    const getPastaSpy = spyOn(dishesService, 'getPasta').and.returnValue(of([]));

    // when
    component.getPasta();

    // then
    expect(getPastaSpy).toHaveBeenCalled();
  });

  it('should call dishService when getPasta', () => {
    // given
    const dishesService = TestBed.get(DishesService);
    const getBeverageSpy = spyOn(dishesService, 'getBeverage').and.returnValue(of([]));

    // when
    component.getBeverage();

    // then
    expect(getBeverageSpy).toHaveBeenCalled();
  });

  it('should call orderService when addDishToOrder', () => {
    // given
    const orderBasketService = TestBed.get(OrderBasketService);
    const addDishToOrderSpy = spyOn(orderBasketService, 'addDishToBasket').and.returnValue(of([]));
    const dish: Dish = <Dish>{};

    // when
    component.addDishToOrder(dish);

    // then
    expect(addDishToOrderSpy).toHaveBeenCalled();
  });
});
