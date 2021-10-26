import { Component, Input, OnChanges, OnInit } from '@angular/core';
// import { singleLine } from './line';

@Component({
  selector: 'app-bar-horizontal',
  templateUrl: './bar-horizontal.component.html',
  styleUrls: ['./bar-horizontal.component.scss'],
})
export class BarHorizontalComponent implements OnChanges {
  @Input() columnX: string;
  @Input() columnY: string;
  @Input() data: { name: string; value: number }[];

  singleLine: any[] = [];
  viewLine: any[] = [700, 400];
  showXAxis = true;
  gradientLine = false;
  showLegendLine = true;
  showXAxisLabelLine = true;

  showYAxisLabelLine = true;
  showLegend = true;


  constructor() {}

  ngOnChanges(): void {
    this.singleLine = this.data
    // Object.assign(this, { singleLine });
  }
}
