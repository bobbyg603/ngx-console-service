import { TestBed } from '@angular/core/testing';

import { NgxConsoleService } from './ngx-console.service';

describe('NgxConsoleService', () => {
  let service: NgxConsoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxConsoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
