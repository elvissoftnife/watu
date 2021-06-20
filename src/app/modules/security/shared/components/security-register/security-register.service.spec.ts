import { TestBed } from '@angular/core/testing';

import { SecurityRegisterService } from './security-register.service';

describe('SecurityRegisterService', () => {
  let service: SecurityRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
