import { Component, OnInit } from '@angular/core';
import { PqrApiService } from 'app/shared/services/pqr-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { multi } from './data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // options line
  multi: any[];
  view: any[] = [700, 300];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  dataBarHorizontal: { name: string; value: number }[] = [];
  dataChartsPie: { name: string; value: number }[] = [];

  constructor(
    private spinnerService: NgxSpinnerService,
    private pqrApi: PqrApiService
  ) {
    this.getReportType();
    this.getReportSubtype();
    Object.assign(this, { multi });
  }

  private getReportType(): void {
    this.spinnerService.show();
    this.pqrApi.getReportByType().subscribe(
      (repo) => {
        const listComplete: any[] = [];
        for (const iterator of repo?.data) {
          listComplete.push({
            name: iterator?.requesttypes[0]?.Name,
            value: iterator?.count,
          });
        }
        this.dataBarHorizontal = listComplete;
        this.spinnerService.hide();
      },
      (err) => {
        this.spinnerService.hide();
        console.log(err);
      }
    );
  }

  private getReportSubtype(): void {
    this.spinnerService.show();
    this.pqrApi.getReportBySubtype().subscribe(
      (repo) => {
        const listComplete: any[] = [];
        for (const iterator of repo?.data) {
          listComplete.push({
            name: iterator?.requestsubtypes[0]?.Name,
            value: iterator?.count,
          });
        }
        this.dataChartsPie = listComplete;
        this.spinnerService.hide();
      },
      (err) => {
        this.spinnerService.hide();
        console.log(err);
      }
    );
  }
}
