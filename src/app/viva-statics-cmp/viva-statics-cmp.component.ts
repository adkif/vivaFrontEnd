import { Component, OnInit } from '@angular/core';
import {ForStatisticsService} from '../services/for-statistics.service';

@Component({
  selector: 'app-viva-statics-cmp',
  templateUrl: './viva-statics-cmp.component.html',
  styleUrls: ['./viva-statics-cmp.component.scss']
})
export class VivaStaticsCmpComponent implements OnInit {
  constructor(private forstatisticsService: ForStatisticsService) { }
  ngOnInit(): void {
  }

}
