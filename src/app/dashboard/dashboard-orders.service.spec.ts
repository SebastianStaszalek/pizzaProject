import { TestBed, inject } from '@angular/core/testing';

import { DashboardOrdersService } from './dashboard-orders.service';

describe('DashboardOrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardOrdersService]
    });
  });

  it('should be created', inject([DashboardOrdersService], (service: DashboardOrdersService) => {
    expect(service).toBeTruthy();
  }));
});
