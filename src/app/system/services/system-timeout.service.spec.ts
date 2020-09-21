import { TestBed } from '@angular/core/testing';

import { SystemTimeoutService } from './system-timeout.service';

describe('SystemTimeoutService', () => {
  let service: SystemTimeoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemTimeoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
