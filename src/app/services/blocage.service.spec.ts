import { TestBed } from '@angular/core/testing';

import { BlocageService } from './blocage.service';

describe('BlocageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlocageService = TestBed.get(BlocageService);
    expect(service).toBeTruthy();
  });
});
