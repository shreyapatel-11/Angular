import { TestBed } from '@angular/core/testing';

import { FilterOverlayPresenterService } from './filter-overlay-presenter.service';

describe('FilterOverlayPresenterService', () => {
  let service: FilterOverlayPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterOverlayPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
