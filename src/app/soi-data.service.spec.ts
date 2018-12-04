import { TestBed } from '@angular/core/testing';

import { SoiDataService } from './soi-data.service';

describe('SoiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoiDataService = TestBed.get(SoiDataService);
    expect(service).toBeTruthy();
  });
});
