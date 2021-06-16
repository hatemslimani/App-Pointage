import { TestBed } from '@angular/core/testing';

import { PreRattrapageService } from './pre-rattrapage.service';

describe('PreRattrapageService', () => {
  let service: PreRattrapageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreRattrapageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
