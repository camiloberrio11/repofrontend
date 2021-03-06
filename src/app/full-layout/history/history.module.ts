import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardDetailAllComponent } from './card-detail-all/card-detail-all.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [HistoryComponent, CardDetailAllComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    SharedModule
  ]
})
export class HistoryModule { }
