import { TestBed } from '@angular/core/testing';

import { MyprogramsService } from './myprograms.service';

describe('MyprogramsService', () => {
  let service: MyprogramsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyprogramsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
