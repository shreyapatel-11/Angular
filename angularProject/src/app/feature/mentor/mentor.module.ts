import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListPresentationComponent } from './list-container/list-presentation/list-presentation.component';
import { FormPresentationComponent } from './form-container/form-presentation/form-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MentorComponent,
    FormContainerComponent,
    ListContainerComponent,
    ListPresentationComponent,
    FormPresentationComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    ReactiveFormsModule,
    // HttpClientModule,
  ]
})
export class MentorModule { }
