import { Component, OnInit } from '@angular/core';
import { PqrApiService } from 'app/shared/services/pqr-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { multi } from './data';
import { single } from './single';

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

  // Torta
  single: any[];
  viewDon: any[] = [700, 400];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabelsDon: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  colorSchemeDon = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };



  dataBarHorizontal: {name: string, value: number}[] = [];

  constructor(
    private spinnerService: NgxSpinnerService,
    private pqrApi: PqrApiService
  ) {
    this.getReportType();
    Object.assign(this, { multi });
    Object.assign(this, { single });
  }

  private getReportType(): void {
    this.dataBarHorizontal = [];
    this.spinnerService.show();
    this.pqrApi.getReportByType().subscribe(repo => {
      for (const iterator of repo?.data) {
        this.dataBarHorizontal.push({name: iterator?.requesttypes[0]?.Name, value: iterator?.count})
      }
      console.log(this.dataBarHorizontal)
      this.spinnerService.hide();
    }, err => {
      this.spinnerService.hide();
      console.log(err);
    });
  }
}
