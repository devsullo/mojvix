import { TestBed, inject } from '@angular/core/testing';

import { JoinFormService } from './join-form.service';

describe('JoinFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoinFormService]
    });
  });

  it('should be created', inject([JoinFormService], (service: JoinFormService) => {
    expect(service).toBeTruthy();
  }));
});
