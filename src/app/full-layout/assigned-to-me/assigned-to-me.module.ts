import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedToMeComponent } from './assigned-to-me.component';
import { AssignedToMeRoutingModule } from './assigned-to-me-routing.module';
import { CardPqrsResumeComponent } from './card-pqrs-resume/card-pqrs-resume.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AssignedToMeComponent, CardPqrsResumeComponent, CardDetailComponent],
  imports: [
    CommonModule,
    AssignedToMeRoutingModule,
    NgxSpinnerModule,
    FormsModule ,
    ReactiveFormsModule,
  ]
})
export class AssignedToMeModule { }
