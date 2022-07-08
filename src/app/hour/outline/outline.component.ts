import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.css']
})
export class OutlineComponent implements OnInit {
  @Input() title:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
