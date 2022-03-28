import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOverlayPresentationComponent } from './filter-overlay-presentation.component';

describe('FilterOverlayPresentationComponent', () => {
  let component: FilterOverlayPresentationComponent;
  let fixture: ComponentFixture<FilterOverlayPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterOverlayPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOverlayPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
