import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentor } from './model/mentor.model';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private http: HttpClient) { }

  getMentor(): Observable<Mentor[]>{
    return this.http.get<Mentor[]>(`http://localhost:3000/mentor`);
  }
  
  addMentor(form: Mentor): Observable<Mentor>{
    return this.http.post<Mentor>(`http://localhost:3000/mentor`, form);
  }
  
  getMentorById(id: string): Observable<Mentor>{
    return this.http.get<Mentor>(`http://localhost:3000/mentor/${id}`);
  }

  editMentor(form: Mentor,id: string): Observable<Mentor>{
    return this.http.put<Mentor>(`http://localhost:3000/mentor/${id}`, form);
  }

  deleteMentor(id: number){
    return this.http.delete(`http://localhost:3000/mentor/${id}`);
  }

  
}
