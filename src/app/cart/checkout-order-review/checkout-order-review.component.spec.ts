import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutOrderReviewComponent } from './checkout-order-review.component';

describe('CheckoutOrderReviewComponent', () => {
  let component: CheckoutOrderReviewComponent;
  let fixture: ComponentFixture<CheckoutOrderReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutOrderReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutOrderReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
