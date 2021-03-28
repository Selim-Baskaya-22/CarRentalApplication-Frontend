import { TestBed } from '@angular/core/testing';

import { RentalDetailsService } from './rental-details.service';

describe('RentalDetailsService', () => {
  let service: RentalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
