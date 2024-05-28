import { TestBed } from '@angular/core/testing';

import { Logservice1Service } from './logservice1.service';

describe('Logservice1Service', () => {
  let service: Logservice1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Logservice1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
