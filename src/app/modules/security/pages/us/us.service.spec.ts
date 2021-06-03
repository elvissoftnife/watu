import { TestBed } from '@angular/core/testing';

import { UsService } from './us.service';

describe('UsService', () => {
  let service: UsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
