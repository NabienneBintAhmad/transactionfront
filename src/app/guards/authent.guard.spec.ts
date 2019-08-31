import { TestBed, async, inject } from '@angular/core/testing';

import { AuthentGuard } from './authent.guard';

describe('AuthentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentGuard]
    });
  });

  it('should ...', inject([AuthentGuard], (guard: AuthentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
