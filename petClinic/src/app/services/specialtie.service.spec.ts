import { TestBed } from '@angular/core/testing';

import { SpecialtieService } from './specialtie.service';

describe('SpecialtieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecialtieService = TestBed.get(SpecialtieService);
    expect(service).toBeTruthy();
  });
});
