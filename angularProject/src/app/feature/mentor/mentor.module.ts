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
import { OverlayModule } from '@angular/cdk/overlay';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FilterOverlayPresentationComponent } from './list-container/list-presentation/filter-overlay-presentation/filter-overlay-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MentorComponent,
    FormContainerComponent,
    ListContainerComponent,
    ListPresentationComponent,
    FormPresentationComponent,
    FilterOverlayPresentationComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    ReactiveFormsModule,
    OverlayModule,
    DragDropModule,
    SharedModule
    // HttpClientModule,
  ]
})
export class MentorModule { }
