import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-count-select',
  templateUrl: './count-select.component.html',
  styleUrls: ['./count-select.component.css']
})
export class CountSelectComponent implements OnInit {
  @Input() title:string ='';
  @Input() optionArr!:Array<any>;
  @ViewChild('select') select?:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
}
