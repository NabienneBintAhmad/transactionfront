import { TestBed } from '@angular/core/testing';

import { DeblocageService } from './deblocage.service';

describe('DeblocageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeblocageService = TestBed.get(DeblocageService);
    expect(service).toBeTruthy();
  });
});
