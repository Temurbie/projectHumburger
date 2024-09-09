import { TestBed } from '@angular/core/testing';

import { MenuSerService } from './menu-ser.service';

describe('MenuSerService', () => {
  let service: MenuSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
