import { Component, OnInit } from "@angular/core";
import { multi } from "./data";
import { single } from "./single";
import { singleLine } from './line';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
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
  xAxisLabel: string = "Year";
  yAxisLabel: string = "Population";
  timeline: boolean = true;

  // Torta
  single: any[];
  viewDon: any[] = [700, 400];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabelsDon: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = "below";

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  };

  colorSchemeDon = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"],
  };


  // Lines
  singleLine: any[];
  viewLine: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradientLine: boolean = false;
  showLegendLine: boolean = true;
  showXAxisLabelLine: boolean = true;
  yAxisLabelLine: string = 'Country';
  showYAxisLabelLine: boolean = true;
  xAxisLabelLine: string = 'Population';

  colorSchemeLine = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi });
    Object.assign(this, { single });
    Object.assign(this, { singleLine });
  }
}
