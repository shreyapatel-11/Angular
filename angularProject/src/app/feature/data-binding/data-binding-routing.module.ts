import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'inter', pathMatch: 'full'
      },
      {
        path: 'inter', component: InterpolationComponent
      },
    ],
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
