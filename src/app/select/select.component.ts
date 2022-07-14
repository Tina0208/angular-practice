import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() optionValues!: Array<string>;
  @Input() selectTitle:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
