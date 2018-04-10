import { TestBed, inject } from '@angular/core/testing';

import { BlurbsService } from './blurbs.service';

describe('BlurbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlurbsService]
    });
  });

  it('should be created', inject([BlurbsService], (service: BlurbsService) => {
    expect(service).toBeTruthy();
  }));
});
