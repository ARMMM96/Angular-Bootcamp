import { TestBed } from '@angular/core/testing';

import { InvestmentResultsServiceTsService } from './investment-results.service.ts.service';

describe('InvestmentResultsServiceTsService', () => {
  let service: InvestmentResultsServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentResultsServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
