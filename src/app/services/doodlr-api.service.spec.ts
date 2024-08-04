import { TestBed } from '@angular/core/testing';

import { DoodlrApiService } from './doodlr-api.service';

describe('DoodlrApiService', () => {
  let service: DoodlrApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoodlrApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
