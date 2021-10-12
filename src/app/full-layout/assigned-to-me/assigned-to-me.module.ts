import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedToMeComponent } from './assigned-to-me.component';
import { AssignedToMeRoutingModule } from './assigned-to-me-routing.module';
import { CardPqrsResumeComponent } from './card-pqrs-resume/card-pqrs-resume.component';



@NgModule({
  declarations: [AssignedToMeComponent, CardPqrsResumeComponent],
  imports: [
    CommonModule,
    AssignedToMeRoutingModule
  ]
})
export class AssignedToMeModule { }
