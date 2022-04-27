import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chart } from '../model/charts.model';


@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  getColumn(): Observable<Chart[]>{
    return this.http.get<Chart[]>(`http://localhost:3000/chart`);
  }

}
