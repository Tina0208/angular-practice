import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-count-select',
  templateUrl: './count-select.component.html',
  styleUrls: ['./count-select.component.css']
})
export class CountSelectComponent implements OnInit {
  @Input() title:string ='台幣帳戶';
  constructor() { }

  ngOnInit(): void {
  }

}
