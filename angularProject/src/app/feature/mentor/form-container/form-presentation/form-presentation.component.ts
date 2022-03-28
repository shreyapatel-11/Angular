import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Mentor } from '../../model/mentor.model';
import { FormPresenterService } from '../form-presenter/form-presenter.service';

@Component({
  selector: 'app-form-presentation',
  templateUrl: './form-presentation.component.html',
  styleUrls: ['./form-presentation.component.scss'],
  viewProviders: [FormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormPresentationComponent implements OnInit {

  @Input() 
  public set mentorData(value : Mentor | null) {
    if (value) {
      this.mentorForm.patchValue(value);
      this._mentorForm = value;
      this.isEditMode = true;
    }
  }
  
  public get mentorData() : Mentor | null{
    return this._mentorForm;
  }
  
  @Output() public add: EventEmitter<Mentor>;
  @Output() public edit: EventEmitter<Mentor>;

  public isEditMode: boolean = false;
  public mentorForm: FormGroup;
  private _mentorForm: Mentor;
  
  constructor(private formPresenter: FormPresenterService) { 
    this.mentorForm = this.formPresenter.buildForm();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
  }

  ngOnInit(): void {
    this.formPresenter.mentorForm$.subscribe(data => {
      if(this.isEditMode){
        this.edit.emit(data);
      }
      else{
        this.add.emit(data);
      }
    })
  }

  onSubmit(){
    this.formPresenter.onSubmit(this.mentorForm);
  }

}
