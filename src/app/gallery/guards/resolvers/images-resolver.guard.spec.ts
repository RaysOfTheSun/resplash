import { TestBed } from '@angular/core/testing';

import { ImagesResolverGuard } from './images-resolver.guard';

describe('ImagesResolverGuard', () => {
  let guard: ImagesResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ImagesResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
