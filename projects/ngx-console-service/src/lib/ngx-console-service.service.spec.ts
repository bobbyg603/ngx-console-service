import { TestBed } from '@angular/core/testing';

import { NgxConsoleServiceService } from './ngx-console-service.service';

describe('NgxConsoleServiceService', () => {
  let service: NgxConsoleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxConsoleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
