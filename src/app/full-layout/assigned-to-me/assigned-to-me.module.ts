import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedToMeComponent } from './assigned-to-me.component';
import { AssignedToMeRoutingModule } from './assigned-to-me-routing.module';



@NgModule({
  declarations: [AssignedToMeComponent],
  imports: [
    CommonModule,
    AssignedToMeRoutingModule
  ]
})
export class AssignedToMeModule { }
