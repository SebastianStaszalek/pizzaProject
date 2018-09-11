import { TestBed, inject } from '@angular/core/testing';

import { DashboardDishesService } from './dashboard-dishes.service';

describe('DashboardDishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardDishesService]
    });
  });

  it('should be created', inject([DashboardDishesService], (service: DashboardDishesService) => {
    expect(service).toBeTruthy();
  }));
});
