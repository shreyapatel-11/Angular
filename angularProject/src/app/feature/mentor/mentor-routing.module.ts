import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerComponent } from './form-container/form-container.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { MentorComponent } from './mentor.component';

const routes: Routes = [
  { path: '', component: MentorComponent ,
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: ListContainerComponent
      },
      {
        path: 'form', component: FormContainerComponent
      },
      {
        path: 'edit/:id', component: FormContainerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
