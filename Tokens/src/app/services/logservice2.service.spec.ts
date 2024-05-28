import { TestBed } from '@angular/core/testing';

import { Logservice2Service } from './logservice2.service';

describe('Logservice2Service', () => {
  let service: Logservice2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Logservice2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
