import { TestBed } from '@angular/core/testing';

import { DoodleTransferService } from './doodle-transfer.service';

describe('DoodleTransferService', () => {
  let service: DoodleTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoodleTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
