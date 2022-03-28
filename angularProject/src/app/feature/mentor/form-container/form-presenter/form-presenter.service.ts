import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Mentor } from '../../model/mentor.model';

@Injectable({
  providedIn: 'root'
})
export class FormPresenterService {
  
  private mentorForm: Subject<Mentor>;
  public mentorForm$: Observable<Mentor>;

  constructor(private fb: FormBuilder) { 
    this.mentorForm = new Subject();
    this.mentorForm$ = new Observable();
    this.mentorForm$ = this.mentorForm.asObservable();
  }

  buildForm(){
    return this.fb.group({
      name: [''],
      age: [''],
      email: [''],
      experience: [''],
      gender: ['']
    })
  }

  onSubmit(mentor: FormGroup){
    this.mentorForm.next(mentor.value);
  }
}
