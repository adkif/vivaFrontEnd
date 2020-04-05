import { Component, AfterViewInit, OnInit } from '@angular/core';
import {ForStatisticsService} from '../services/for-statistics.service';

@Component({
  selector: 'app-viva-chart-cmp',
  templateUrl: './viva-chart-cmp.component.html',
  styleUrls: ['./viva-chart-cmp.component.scss']
})
export class VivaChartCmpComponent implements OnInit {
  barChartLabels: any[];
  barChartType: string;
  barChartLegend: boolean;
  barChartData: any[];
  constructor(private forstatisticsService: ForStatisticsService) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  ngOnInit() {
    this.barChartLabels = this.forstatisticsService.barChartLabels;
    this.barChartType = this.forstatisticsService.barChartType;
    this.barChartLegend = this.forstatisticsService.barChartLegend;
    this.barChartData = this.forstatisticsService.barChartData;
  }
}
