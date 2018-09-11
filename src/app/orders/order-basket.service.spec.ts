import { TestBed, inject } from '@angular/core/testing';

import { OrderBasketService } from './order-basket.service';

describe('OrderBasketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderBasketService]
    });
  });

  it('should be created', inject([OrderBasketService], (service: OrderBasketService) => {
    expect(service).toBeTruthy();
  }));
});
