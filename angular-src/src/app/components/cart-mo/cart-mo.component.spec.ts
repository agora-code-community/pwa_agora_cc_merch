import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMoComponent } from './cart-mo.component';

describe('CartMoComponent', () => {
  let component: CartMoComponent;
  let fixture: ComponentFixture<CartMoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartMoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
