import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentFormInputComponent } from './investment-form-input.component';

describe('InvestmentFormInputComponent', () => {
  let component: InvestmentFormInputComponent;
  let fixture: ComponentFixture<InvestmentFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentFormInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
