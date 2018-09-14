import {TestBed, inject} from '@angular/core/testing';

import {DishesService} from './dishes.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {Dish} from '../model/dish.model';

fdescribe('DishesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let dishesService: DishesService;
  const dishPizzaUrl = '/api/dishes';

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

  it('should call HttpClient.get', inject([DishesService], (service: DishesService) => {
    const testData: Dish[] = [<Dish>{}, <Dish>{}];

    dishesService.getDishes().subscribe(
      dishes => expect(dishes).toEqual(testData, 'should return expected dishes'),
      fail
    );

    const req = httpTestingController.expectOne(dishPizzaUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  }));

});
