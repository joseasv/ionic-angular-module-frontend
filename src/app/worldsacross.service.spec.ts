import { TestBed } from '@angular/core/testing';

import { WorldsacrossService } from './worldsacross.service';

describe('WorldsacrossService', () => {
  let service: WorldsacrossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldsacrossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
