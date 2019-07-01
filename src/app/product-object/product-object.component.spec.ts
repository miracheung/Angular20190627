import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductObjectComponent } from './product-object.component';

describe('ProductListComponent', () => {
  let component: ProductObjectComponent;
  let fixture: ComponentFixture<ProductObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
