import { TestBed } from '@angular/core/testing';

import { DataOnlineService } from './data-online.service';

describe('DataOnlineService', () => {
  let service: DataOnlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataOnlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
