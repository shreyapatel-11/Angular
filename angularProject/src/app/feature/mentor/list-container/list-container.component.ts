import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MentorService } from '../mentor.service';
import { Mentor } from '../model/mentor.model';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  public mentorList$: Observable<Mentor[]>;

  constructor(private mentorService: MentorService) { 
    this.mentorList$ = new Observable();
  }

  ngOnInit(): void {
    this.mentorList$ = this.mentorService.getMentor();
  }

  delete(id: number){
    this.mentorService.deleteMentor(id).subscribe(data => {
      console.log(data);
    })
  }
}
