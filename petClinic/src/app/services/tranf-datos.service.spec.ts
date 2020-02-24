import { TestBed } from '@angular/core/testing';

import { TranfDatosService } from './tranf-datos.service';

describe('TranfDatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranfDatosService = TestBed.get(TranfDatosService);
    expect(service).toBeTruthy();
  });
});
