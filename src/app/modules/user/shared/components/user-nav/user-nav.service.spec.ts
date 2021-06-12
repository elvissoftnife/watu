import { TestBed } from '@angular/core/testing';

import { UserNavService } from './user-nav.service';

describe('UserNavService', () => {
  let service: UserNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
