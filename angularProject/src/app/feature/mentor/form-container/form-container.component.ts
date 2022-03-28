import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MentorService } from '../mentor.service';
import { Mentor } from '../model/mentor.model';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  public mentorData$ : Observable<Mentor>;
  public id!: string;

  constructor(private mentorService: MentorService, private route: Router, private activeRoute: ActivatedRoute) { 
    this.mentorData$ = new Observable();
    this.id = this.activeRoute.snapshot.params['id'];

    if(this.id){
      console.log(this.id)
      this.mentorData$ = mentorService.getMentorById(this.id);
    }
  }

  ngOnInit(): void {
  }

  addMentor(mentorForm: Mentor){
    this.mentorService.addMentor(mentorForm).subscribe(data => {
      alert("post");
      this.route.navigateByUrl('mentor/list');
    })
  }

  editMentor(mentor: Mentor){
    this.mentorService.editMentor(mentor,this.id).subscribe(data => {
      this.route.navigateByUrl('mentor/list');
    })
  }
}
