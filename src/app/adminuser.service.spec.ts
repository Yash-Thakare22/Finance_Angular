import { TestBed } from '@angular/core/testing';

import { AdminuserService } from './adminuser.service';

describe('AdminuserService', () => {
  let service: AdminuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
