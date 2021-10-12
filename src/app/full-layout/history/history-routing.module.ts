import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailAllComponent } from './card-detail-all/card-detail-all.component';
import { HistoryComponent } from './history.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,
    data: {
      title: 'Historial'
    }
  },
  {
    path: 'detail',
    component: CardDetailAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule { }
