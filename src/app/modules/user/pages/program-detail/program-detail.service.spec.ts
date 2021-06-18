import { TestBed } from '@angular/core/testing';

import { ProgramDetailService } from './program-detail.service';

describe('ProgramDetailService', () => {
  let service: ProgramDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
