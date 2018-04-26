import { TestBed, inject } from '@angular/core/testing';

import { PassRecoverFormService } from './pass-recover-form.service';

describe('PassRecoverFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassRecoverFormService]
    });
  });

  it('should be created', inject([PassRecoverFormService], (service: PassRecoverFormService) => {
    expect(service).toBeTruthy();
  }));
});
