import { TestBed } from '@angular/core/testing';

import { ColdStorageService } from './cold-storage.service';

describe('ColdStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColdStorageService = TestBed.get(ColdStorageService);
    expect(service).toBeTruthy();
  });
});
