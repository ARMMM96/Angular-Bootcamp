import { Component, Input } from '@angular/core';
import { InvestmentResult } from '../../interfaces/investment-results.interface';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-output-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-output-table.component.html',
  styleUrl: './investment-output-table.component.css',
})
export class InvestmentOutputTableComponent {
  @Input() data!: InvestmentResult[];
}
