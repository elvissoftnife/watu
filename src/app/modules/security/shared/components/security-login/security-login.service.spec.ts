import { TestBed } from '@angular/core/testing';

import { SecurityLoginService } from './security-login.service';

describe('SecurityLoginService', () => {
  let service: SecurityLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
