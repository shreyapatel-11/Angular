import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mentor } from '../../model/mentor.model';
import { ListPresenterService } from '../list-presenter/list-presenter.service';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.scss'],
  viewProviders: [ListPresenterService],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPresentationComponent implements OnInit {

  data$: Observable<any>;
  startIndex = 0;
  endIndex = 5;
  @Input() public set mentorList(value : Mentor[] | null) {
    if (value) {
      this._mentorList = value;
    }
  }
 
  public get mentorList() : Mentor[] {
    return this._mentorList;
  }
  
  @Output() public delete: EventEmitter<number>;
  // public mentorForm: FormGroup;

  public filterMentor: Mentor[];
  public _mentorList!: Mentor[];
  
  constructor(private route: Router,private listPresenter: ListPresenterService, private http: HttpClient) { 
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.listPresenter.delete$.subscribe(data => {
      this.delete.emit(data);
    })

    this.listPresenter.filterData$.subscribe(data => {
      this.filterMentorData(data)
    })

    // pagination
    this.data$ = this.http.get(`http://localhost:3000/mentor`)
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

  // filter data
  filterMentorData(data: any){
    if (!this.filterMentor) {
      this.filterMentor = [...this._mentorList];
    }
    console.log(this.filterMentor)

    const keys: string[] = Object.keys(data);

    keys.forEach((key) => {
      if(data[key]) {
       
        this.filterMentor = this.filterMentor.filter((res: any) => {
          
          return res[key] === data[key];
        })
      }
    })
    // debugger
    this._mentorList = this.filterMentor;
  }

  // drag and drop
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this._mentorList, event.previousIndex, event.currentIndex);
  }

  // pagination
  getMentorArrayLen(length: number){
    return new Array(length/6);
  }
  updateIndex(pageIndex: number){
    this.startIndex = pageIndex * 6;
    this.endIndex = this.startIndex + 6;
  }
}

