import { Injectable } from '@angular/core';
import { PieChart } from '../../model/pie-chart.model';

@Injectable({
  providedIn: 'root'
})
export class ChartPresenterService {

  leave: PieChart[]= [
    {}
    
  ]
  constructor() { }
}
