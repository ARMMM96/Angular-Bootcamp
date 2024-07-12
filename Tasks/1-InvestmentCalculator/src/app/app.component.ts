import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InvestmentFormInputComponent } from './components/investment-form-input/investment-form-input.component';
import { InvestmentOutputTableComponent } from './components/investment-output-table/investment-output-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    InvestmentFormInputComponent,
    InvestmentOutputTableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Investment-Calculator';
}
