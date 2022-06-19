import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-chart',
  templateUrl: './detail-chart.component.html',
  styleUrls: ['./detail-chart.component.css']
})
export class DetailChartComponent implements OnInit {
@Input() title:string = "收支";
@Input() days:string = '---';
  constructor() { }

  ngOnInit(): void {
  }

}
