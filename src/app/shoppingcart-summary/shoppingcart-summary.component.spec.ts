import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartSummaryComponent } from './shoppingcart-summary.component';

describe('ShoppingcartSummaryComponent', () => {
  let component: ShoppingcartSummaryComponent;
  let fixture: ComponentFixture<ShoppingcartSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
