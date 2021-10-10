import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignedToMeComponent } from './assigned-to-me.component';

const routes: Routes = [
  {
    path: '',
    component: AssignedToMeComponent,
    data: {
      title: 'Asignado a mi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignedToMeRoutingModule { }
