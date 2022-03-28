import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FilterOverlayPresenterService {

  constructor(private fb: FormBuilder) { }

  mentorForm: FormGroup;
  
  builForm() {
    return this.mentorForm = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      email: [''],
      experience: ['']
    })
  }
}
