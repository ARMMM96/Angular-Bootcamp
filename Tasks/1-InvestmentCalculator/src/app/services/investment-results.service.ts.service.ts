import { Injectable } from '@angular/core';
import { Investment } from '../interfaces/investment-input.interface';
import { InvestmentResult } from '../interfaces/investment-results.interface';
@Injectable({
  providedIn: 'root',
})
export class InvestmentResultsServiceTsService {
  constructor() {}

  calculateInvestmentResults(investment: Investment): InvestmentResult[] {
    const annualData: InvestmentResult[] = [];
    let investmentValue = investment.initialInvestment;

    for (let i = 0; i < investment.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investment.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investment.annualInvestment;
      const totalInterest =
        investmentValue -
        investment.annualInvestment * year -
        investment.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investment.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investment.initialInvestment + investment.annualInvestment * year,
      });
    }

    return annualData;
  }


}
