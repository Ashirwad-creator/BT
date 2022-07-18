import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud-service.service';

describe('CrudServiceService', () => {
  let service: CrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
