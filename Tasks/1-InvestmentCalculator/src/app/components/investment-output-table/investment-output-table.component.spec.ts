import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentOutputTableComponent } from './investment-output-table.component';

describe('InvestmentOutputTableComponent', () => {
  let component: InvestmentOutputTableComponent;
  let fixture: ComponentFixture<InvestmentOutputTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentOutputTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentOutputTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
