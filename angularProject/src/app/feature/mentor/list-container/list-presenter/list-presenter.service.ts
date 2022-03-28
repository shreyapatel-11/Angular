import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Mentor } from '../../model/mentor.model';

@Injectable({
  providedIn: 'root'
})
export class ListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;

  constructor() { 
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();
  }

  onDelete(id: number){
    this.delete.next(id);
  }
}
