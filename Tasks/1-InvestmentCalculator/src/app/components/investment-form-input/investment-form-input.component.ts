import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvestmentResultsServiceTsService } from '../../services/investment-results.service.ts.service';
import type { InvestmentResult } from '../../interfaces/investment-results.interface';

@Component({
  selector: 'app-investment-form-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './investment-form-input.component.html',
  styleUrl: './investment-form-input.component.css',
})
export class InvestmentFormInputComponent {
  @Output() send = new EventEmitter<InvestmentResult[]>();
  enteredInitialInvestment: number = 0;
  enteredAnnualInvestment: number = 0;
  enteredExpectedReturn: number = 0;
  enteredDuration: number = 0;

  constructor(
    private investmentResultsService: InvestmentResultsServiceTsService
  ) {}

  onSubmit() {
    let results = this.investmentResultsService.calculateInvestimentResults({
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnnualInvestment,
      expectedReturn: this.enteredExpectedReturn,
      duration: this.enteredDuration,
    });


    this.send.emit(results);
  }
}
