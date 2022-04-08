import { Injectable } from '@angular/core';
import { PieChart } from '../../model/pie-chart.model';

@Injectable({
  providedIn: 'root'
})
export class ChartPresenterService {

  leave: PieChart[]= [
    {leaveName: 'office work'},
    {leaveName: 'sleep'},
    {leaveName: 'Eat'},
    {leaveName: 'Watch TV'},
    
  ]
  constructor() { }

  getAll() {
    return this.leave;
  }
}
