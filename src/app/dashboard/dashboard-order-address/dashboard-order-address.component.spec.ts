import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrderAddressComponent } from './dashboard-order-address.component';

describe('DashboardOrderAddressComponent', () => {
  let component: DashboardOrderAddressComponent;
  let fixture: ComponentFixture<DashboardOrderAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOrderAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOrderAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
