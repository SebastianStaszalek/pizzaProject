import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDishDetailsComponent } from './dashboard-dish-details.component';

describe('DashboardDishDetailsComponent', () => {
  let component: DashboardDishDetailsComponent;
  let fixture: ComponentFixture<DashboardDishDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDishDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDishDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
