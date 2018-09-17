import {TestBed, inject} from '@angular/core/testing';

import {DishesService} from './dishes.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {Dish} from '../model/dish.model';

fdescribe('DishesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let dishesService: DishesService;
  const dishUrl = '/api/dishes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesService],
      imports: [
        HttpClientTestingModule
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    dishesService = TestBed.get(DishesService);
  });

  it('should be created', inject([DishesService], (service: DishesService) => {
    expect(service).toBeTruthy();
  }));

  it('should call HttpClient.get when getDishes', inject([DishesService], (service: DishesService) => {
    const testData: Dish[] = [<Dish>{}, <Dish>{}];

    dishesService.getDishes().subscribe(
      dishes => expect(dishes).toEqual(testData, 'should return expected dishes'),
      fail
    );

    const req = httpTestingController.expectOne(dishUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  }));

  it('should call HttpClient.get when getPizza', inject([DishesService], (service: DishesService) => {
    const expectedData: Dish[] = [<Dish>{ isAvailable: true}, <Dish>{ isAvailable: true }];
    const pizzaUrl = '/api/dishes/?type=pizza';

    dishesService.getPizza().subscribe(
      dishes => expect(dishes).toEqual(expectedData, 'should return expected dishes'),
      fail
    );

    const req = httpTestingController.expectOne(pizzaUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedData);

    httpTestingController.verify();
  }));

  it('should call HttpClient.get when getPizza and filter available Dishes', inject([DishesService], (service: DishesService) => {
    const testData: Dish[] = [<Dish>{ isAvailable: true}, <Dish>{ isAvailable: false }];
    const expectedData: Dish[] = [<Dish>{isAvailable: true}];
    const pizzaUrl = '/api/dishes/?type=pizza';

    dishesService.getPizza().subscribe(
      dishes => expect(dishes).toEqual(expectedData, 'should return expected pizzas'),
      fail
    );


    const req = httpTestingController.expectOne(pizzaUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  }));

  it('should call HttpClient.get when getPizza and find Dish by id', inject([DishesService], (service: DishesService) => {
    const testData: Dish = <Dish>{ id: 1};
    const id = 1;
    const findByIdUrl = `/api/dishes/${id}`;

    dishesService.getDish(id).subscribe(
      dishes => expect(dishes).toEqual(testData, 'should return expected pizzas'),
      fail
    );

    const req = httpTestingController.expectOne(findByIdUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    httpTestingController.verify();
  }));

});
