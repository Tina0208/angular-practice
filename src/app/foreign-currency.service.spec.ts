import { TestBed } from '@angular/core/testing';

import { ForeignCurrencyService } from './foreign-currency.service';

describe('ForeignCurrencyService', () => {
  let service: ForeignCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForeignCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
