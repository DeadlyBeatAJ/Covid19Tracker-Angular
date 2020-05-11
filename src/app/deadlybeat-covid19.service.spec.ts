import { TestBed } from '@angular/core/testing';

import { DeadlybeatCovid19Service } from './deadlybeat-covid19.service';

describe('DeadlybeatCovid19Service', () => {
  let service: DeadlybeatCovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeadlybeatCovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
