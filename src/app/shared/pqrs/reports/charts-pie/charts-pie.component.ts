import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-charts-pie',
  templateUrl: './charts-pie.component.html',
  styleUrls: ['./charts-pie.component.scss'],
})
export class ChartsPieComponent implements OnChanges {
  @Input() data: {name: string; value: number}[];

  single: any[];
  viewDon: any[] = [700, 400];
  gradient = true;
  showLegend = true;
  showLabelsDon = true;
  isDoughnut = false;
  legendPosition = 'below';
  constructor() {

  }

  ngOnChanges(): void {
    this.single = this.data;
  }
}
