import { TestBed } from '@angular/core/testing';

import { AJAXService } from './ajax.service';

describe('AJAXService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AJAXService = TestBed.get(AJAXService);
    expect(service).toBeTruthy();
  });
});
