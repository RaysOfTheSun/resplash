import { TestBed } from '@angular/core/testing';

import { ImageResolverGuard } from './image-resolver.guard';

describe('ImageResolverGuard', () => {
  let guard: ImageResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ImageResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
