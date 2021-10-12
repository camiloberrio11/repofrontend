import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignedToMeComponent } from './assigned-to-me.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AssignedToMeComponent,
    data: {
      title: 'Asignado a mi'
    },
  },
  { path: "detail", component: CardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignedToMeRoutingModule { }
