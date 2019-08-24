import { TestBed } from '@angular/core/testing';

import { AgencesService } from './agences.service';

describe('AgencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgencesService = TestBed.get(AgencesService);
    expect(service).toBeTruthy();
  });
});
