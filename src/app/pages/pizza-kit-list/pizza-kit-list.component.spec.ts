import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaKitListComponent } from './pizza-kit-list.component';

describe('PizzaKitListComponent', () => {
  let component: PizzaKitListComponent;
  let fixture: ComponentFixture<PizzaKitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaKitListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaKitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
