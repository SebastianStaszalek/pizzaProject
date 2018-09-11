import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDishesListComponent } from './dashboard-dishes-list.component';

describe('DashboardDishesListComponent', () => {
  let component: DashboardDishesListComponent;
  let fixture: ComponentFixture<DashboardDishesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDishesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDishesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
