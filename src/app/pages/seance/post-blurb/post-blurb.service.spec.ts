import { TestBed, inject } from '@angular/core/testing';

import { PostBlurbService } from './post-blurb.service';

describe('PostBlurbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostBlurbService]
    });
  });

  it('should be created', inject([PostBlurbService], (service: PostBlurbService) => {
    expect(service).toBeTruthy();
  }));
});
