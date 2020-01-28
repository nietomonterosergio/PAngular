import { TestBed } from '@angular/core/testing';

import { PAJAXService } from './p-ajax.service';

describe('PAJAXService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PAJAXService = TestBed.get(PAJAXService);
    expect(service).toBeTruthy();
  });
});
