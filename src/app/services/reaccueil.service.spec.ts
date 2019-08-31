import { TestBed } from '@angular/core/testing';

import { ReaccueilService } from './reaccueil.service';

describe('ReaccueilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReaccueilService = TestBed.get(ReaccueilService);
    expect(service).toBeTruthy();
  });
});
