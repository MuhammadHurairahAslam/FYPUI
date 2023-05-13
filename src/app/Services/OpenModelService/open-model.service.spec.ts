import { TestBed } from '@angular/core/testing';

import { OpenModelService } from './open-model.service';

describe('OpenModelService', () => {
  let service: OpenModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
