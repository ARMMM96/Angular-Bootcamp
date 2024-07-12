import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InvestmentResultsServiceTsService } from '../../services/investment-results.service.ts.service';
import type { InvestmentResult } from '../../interfaces/investment-results.interface';

@Component({
  selector: 'app-investment-form-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './investment-form-input.component.html',
  styleUrl: './investment-form-input.component.css',
})
export class InvestmentFormInputComponent {
  @Output() send = new EventEmitter<InvestmentResult[]>();
  enteredInitialInvestment: number = 0;
  enteredAnnualInvestment: number = 0;
  enteredExpectedReturn: number = 0;
  enteredDuration: number = 0;
  submissionError: boolean = false;

  constructor(
    private investmentResultsService: InvestmentResultsServiceTsService
  ) {}

  onSubmit() {
    if (
      this.enteredInitialInvestment < 1 ||
      this.enteredAnnualInvestment < 1 ||
      this.enteredExpectedReturn < 1 ||
      this.enteredDuration < 1
    ) {
      this.submissionError = true;
      return;
    }

    this.submissionError = false;
    let results = this.investmentResultsService.calculateInvestmentResults({
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnnualInvestment,
      expectedReturn: this.enteredExpectedReturn,
      duration: this.enteredDuration,
    });

    this.send.emit(results);
  }
}
