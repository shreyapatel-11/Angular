import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Mentor } from '../../../model/mentor.model';
import { FilterOverlayPresenterService } from '../filter-overlay-presenter/filter-overlay-presenter.service';

@Component({
  selector: 'app-filter-overlay-presentation',
  templateUrl: './filter-overlay-presentation.component.html',
  styleUrls: ['./filter-overlay-presentation.component.scss'],
  viewProviders: [FilterOverlayPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterOverlayPresentationComponent implements OnInit {

  @Output() filterData: EventEmitter<Mentor>;

  mentorForm: FormGroup;
  constructor(private filterPresenter: FilterOverlayPresenterService) { 
    this.mentorForm = filterPresenter.builForm();
    this.filterData = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onApply(){
    this.filterData.emit(this.mentorForm.value);
  }
}
