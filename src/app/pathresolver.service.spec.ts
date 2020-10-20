import { TestBed } from '@angular/core/testing';

import { PathresolverService } from './pathresolver.service';

describe('PathresolverService', () => {
  let service: PathresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
