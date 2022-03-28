import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Mentor } from '../../model/mentor.model';
import { ListPresenterService } from '../list-presenter/list-presenter.service';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.scss'],
  viewProviders: [ListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPresentationComponent implements OnInit {

  @Input() public set mentorList(value : Mentor[] | null) {
    if (value) {
      this._mentorList = value;
    }
  }
 
  public get mentorList() : Mentor[] {
    return this._mentorList
  }
  
  @Output() public delete: EventEmitter<number>;
  // public mentorForm: FormGroup;

  private _mentorList!: Mentor[];
  constructor(private route: Router,private listPresenter: ListPresenterService) { 
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.listPresenter.delete$.subscribe(data => {
      this.delete.emit(data);
    })
  }

  onEdit(id: number){
    this.route.navigateByUrl(`mentor/edit/${id}`);
  }

  onOverlay(){
    this.listPresenter.openOverlay();
  }
  onDelete(id: number){
    this.listPresenter.onDelete(id);
  }
}
