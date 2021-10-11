import { TestBed } from '@angular/core/testing';

import { PqrApiService } from './pqr-api.service';

describe('PqrApiService', () => {
  let service: PqrApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PqrApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
