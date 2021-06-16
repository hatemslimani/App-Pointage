import { TestBed } from '@angular/core/testing';

import { RattrapageService } from './rattrapage.service';

describe('RattrapageService', () => {
  let service: RattrapageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RattrapageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
