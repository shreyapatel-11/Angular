import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  personalDetails: FormGroup
  step = 1;
  intro_step = true;
  contact_step = false;
  id_step = false;
  password_step = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetails = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  next() {
    if (this.step == 1) {
      this.contact_step = true;
      this.step++;
      return;
    }
    else if(this.step == 2){
    
      this.contact_step = true;
      this.step++
    }
    else{
      this.id_step = true;
      this.step++
    }
  }

  previous() {
    this.step--;
    if (this.step == 1) {
      this.intro_step = false;
      return
    }
    console.log("previous: ",this.step);
  }

  submit() {
    if (this.step === 4) {
      this.password_step = true;
      return
    }
  }
}
