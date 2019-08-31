import { TestBed } from '@angular/core/testing';

import { CaissierService } from './caissier.service';

describe('CaissierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaissierService = TestBed.get(CaissierService);
    expect(service).toBeTruthy();
  });
});
